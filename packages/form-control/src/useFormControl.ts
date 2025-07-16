import { ActivityIndicatorSize } from '@vue-interface/activity-indicator';
import { computed, nextTick, onBeforeMount, ref, useAttrs, useSlots, watch, type Component, type ModelRef } from 'vue';

export type FormControlEvents<T> = {
    (e: 'blur' | 'focus', event: FocusEvent): void;
    (e: 'click', event: MouseEvent): void;
    (e: 'change', value: T|undefined): void;
    (e: 'update:modelValue', value: T): void;
};

export type FormControlFeedbackPropSlot = (
    props: {
        feedback?: FormControlFeedbackProp
    }
) => unknown;

export type FormControlActivitySlot = () => unknown;
export type FormControlHelpSlot = (helpText?: string) => unknown;
export type FormControlIconSlot = () => unknown;
export type FormControlLabelSlot = () => unknown;

export type FormControlSlots<P extends string, T> = {
    control?: FormControlSlot<P,T>;
    activity?: FormControlActivitySlot;
    errors?: FormControlErrorSlot;
    feedback?: FormControlFeedbackPropSlot;
    icon?: FormControlIconSlot;
    label?: FormControlLabelSlot;
    help?: FormControlHelpSlot;
};

export type FormControlSlot<P extends string, T> = (
    props: {
        controlAttributes: FormControlAttributes<P, T>;
        onClick: (e: MouseEvent) => void;
        onBlur: (e: FocusEvent) => void;
        onFocus: (e: FocusEvent) => void;
    }
) => unknown;

export type FormControlErrorSlot = (props: {
    name?: unknown;
    id?: unknown;
    error?: FormControlErrorProp;
    errors?: FormControlErrorPropArray | FormControlErrorPropRecord;
}) => unknown;

export type FormControlErrorProp = string | Error;
export type FormControlErrorPropArray = FormControlErrorProp[];
export type FormControlErrorPropRecord = Record<string,FormControlErrorProp[]>
export type FormControlFeedbackProp = string | string[];

export type PredeterminedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type Unit = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%' | 'ch' | 'ex' | 'cm' | 'mm' | 'in' | 'pt' | 'pc';
type NumericWithUnit = `${number}${Unit}`;
type CalcExpressionChar = number | '.' | '+' | '-' | '*' | '/' | '(' | ')' | '_'
type NonEmptyCalcContentString = `${CalcExpressionChar}${string}` | CalcExpressionChar;
type ValidCalc = `calc(${NonEmptyCalcContentString})`;
type ValidBracketContent =  NumericWithUnit | ValidCalc;

export type FormControlSize<
    P extends string,
    T extends PredeterminedSize = PredeterminedSize,
    C extends string = never,
> = `${P}-${T}` | `${P}-${number}` | `${P}-[${ValidBracketContent}]` | C;

export type FormControlProps<P extends string,T,V,C extends string = never> = {
    activity?: boolean;
    disabled?: boolean;
    error?: FormControlErrorProp;
    errors?: FormControlErrorPropArray | FormControlErrorPropRecord;
    feedback?: FormControlFeedbackProp;
    formControlClass?: string;
    helpText?: string;
    id?: string;
    indicator?: Component;
    indicatorSize?: ActivityIndicatorSize;
    invalid?: boolean;
    label?: string;
    labelClass?: string;
    modelValue?: T;
    name?: string;
    plaintext?: boolean;
    size?: FormControlSize<P,PredeterminedSize,C>;
    readonly?: boolean;
    valid?: boolean;
    value?: V;
}

export type FormGroupClasses = {
    'has-activity': boolean;
    'has-changed': boolean;
    'has-focus': boolean;
    'has-icon': boolean;
    'is-dirty': boolean;
    'is-empty': boolean;
    'is-invalid': boolean;
    'is-valid': boolean;
} & Record<string,boolean>

export type FormControlAttributes<P extends string, V> = {
    id: string,
    class: FormControlClasses<P>;
    disabled?: boolean;
    readonly?: boolean;
    value?: V;
} & Record<string, unknown>;

export type FormControlClasses<P extends string> = {
    'form-control-plaintext': boolean;
    'form-control-icon': boolean;
    'is-valid': boolean;
    'is-invalid': boolean;
    'is-dirty': boolean;
    'is-empty': boolean;
    size?: FormControlSize<P>
} & Record<string,boolean>

export type CheckedFormControlProps<P extends string,T,V,C extends string = never> = FormControlProps<P,T,V,C> & {
    checked?: boolean;
}

export type UseFormControlOptions<P extends string,T,V,C extends string = never> = {
    model: ModelRef<T|undefined>;
    props: FormControlProps<P,T,V,C> | CheckedFormControlProps<P,T,V,C>;
    emit: FormControlEvents<T>;
}

export function useFormControl<P extends string,T,V,C extends string = never>({ props, emit, model }: UseFormControlOptions<P,T,V,C>) {
    const attrs = useAttrs();
    
    const hasChanged = ref(false);
    const hasFocus = ref(false);
    const hasIcon = computed(() => {
        return !!useSlots().icon;
    });

    const isDirty = ref(false);
    const isEmpty = ref(false);

    const unwatch = watch(model, () => {
        hasChanged.value = true;
        isDirty.value = true;
        unwatch();
    });

    const id = computed<string>(() => {
        return props.id ?? Math.random().toString(36).slice(2);
    });

    const isInvalid = computed(() => {
        return !!(props.invalid || props.error || props.errors && (
            Array.isArray(props.errors)
                ? props.errors.length
                : props.errors[(props.name || id.value) as string]
        ));
    });

    const isValid = computed(() => {
        return !isInvalid.value && !!(props.valid || props.feedback);
    });

    const formGroupClasses = computed<FormGroupClasses>(() => ({
        [String(attrs.class)]: !!attrs.class,
        'has-activity': !!props.activity,
        'has-changed': hasChanged.value,
        'has-focus': hasFocus.value,
        'has-icon': hasIcon.value,
        'is-valid': isValid.value,
        'is-invalid': isInvalid.value,
        'is-dirty': isDirty.value,
        'is-empty': isEmpty.value,
    }));

    const controlClasses = computed<FormControlClasses<P>>(() => ({        
        [props.formControlClass ?? '']: !!props.formControlClass,
        [props.size ?? '']: !!props.size,
        'form-control-plaintext': !!props.plaintext,
        'form-control-icon': hasIcon.value,
        'is-valid': isValid.value,
        'is-invalid': isInvalid.value,
        'is-dirty': isDirty.value,
        'is-empty': isEmpty.value,
    }));

    const controlAttributes = computed<FormControlAttributes<P,T>>(() => ({
        ...attrs,
        id: id.value,
        name: props.name,
        class: controlClasses.value,
        disabled: props.disabled,
        readonly: props.readonly
    }));

    function onClick(e: MouseEvent) {
        if(props.readonly) {
            e.preventDefault();
        }

        nextTick(() => {
            emit('click', e);
        });
    }

    function onBlur(e: FocusEvent) {
        hasFocus.value = false;

        emit('blur', e);
    }

    function onFocus(e: FocusEvent) {
        isDirty.value = true;
        hasFocus.value = true;

        emit('focus', e);
    }

    onBeforeMount(() => {
        isDirty.value = model.value !== null && model.value !== undefined;
    });

    return {
        controlAttributes,
        controlClasses,
        formGroupClasses,
        hasFocus,
        model,
        id,
        onClick,
        onBlur,
        onFocus
    };
}