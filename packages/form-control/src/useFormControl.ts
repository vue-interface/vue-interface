import { ActivityIndicatorSize } from '@vue-interface/activity-indicator';
import { computed, nextTick, onBeforeMount, ref, useAttrs, useSlots, watch, type Component, type EmitFn, type HTMLAttributes, type ModelRef } from 'vue';

export type NativeFormControlEvents = {
    blur: [event: FocusEvent];
    focus: [event: FocusEvent];
    focusin: [event: FocusEvent];
    focusout: [event: FocusEvent];
    click: [event: MouseEvent];
    doubleclick: [event: MouseEvent];
    contextmenu: [event: MouseEvent];
    mousedown: [event: MouseEvent];
    mouseup: [event: MouseEvent];
    mouseover: [event: MouseEvent];
    mouseout: [event: MouseEvent];
    mouseenter: [event: MouseEvent];
    mouseleave: [event: MouseEvent];
    mousemove: [event: MouseEvent];
    keydown: [event: KeyboardEvent];
    keyup: [event: KeyboardEvent];
    keypress: [event: KeyboardEvent];
    select: [event: Event];
    selectionchange: [event: Event];
    invalid: [event: Event];
    submit: [event: Event];
    reset: [event: Event];
    scroll: [event: Event];
    wheel: [event: WheelEvent];
    copy: [event: ClipboardEvent];
    cut: [event: ClipboardEvent];
    paste: [event: ClipboardEvent];
    touchstart: [event: TouchEvent];
    touchend: [event: TouchEvent];
    touchmove: [event: TouchEvent];
    touchcancel: [event: TouchEvent];
    change: [event: Event];
    input: [event: Event];
    beforeinput: [event: Event];
};

export type FormControlEvents<ModelValue> = {
    'update:modelValue': [value: ModelValue];
} & NativeFormControlEvents;

export type FormControlListeners<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: T[K] extends [infer Arg1, infer Arg2]
    ? (arg1: Arg1, arg2: Arg2) => void
    : T[K] extends [infer Arg1]
    ? (arg1: Arg1) => void
    : () => void;
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

export type FormControlSlots<Prefix extends string, ModelValue> = {
    control?: FormControlSlot<Prefix, ModelValue>;
    activity?: FormControlActivitySlot;
    errors?: FormControlErrorSlot;
    feedback?: FormControlFeedbackPropSlot;
    icon?: FormControlIconSlot;
    label?: FormControlLabelSlot;
    help?: FormControlHelpSlot;
};

export type FormControlSlot<Prefix extends string, ModelValue> = (
    props: {
        controlAttributes: FormControlAttributes<Prefix, ModelValue>;
        listeners: FormControlListeners<NativeFormControlEvents>;
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
    Prefix extends string,
    Value extends PredeterminedSize = PredeterminedSize
> = `${Prefix}-${Value}` | `${Prefix}-${number}` | `${Prefix}-[${ValidBracketContent}]`;

export type FormControlProps<
    Attributes extends HTMLAttributes,
    Size extends string,
    ModelValue,
    Value
> = {
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
    modelValue?: ModelValue;
    name?: string;
    plaintext?: boolean;
    size?: FormControlSize<Size,PredeterminedSize>;
    color?: string;
    readonly?: boolean;
    valid?: boolean;
    value?: Value;
} & /* @vue-ignore */ Attributes;

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

export type FormControlAttributes<Prefix extends string, ModelValue> = {
    id: string,
    class: FormControlClasses<Prefix>;
    disabled?: boolean;
    readonly?: boolean;
    value?: ModelValue;
} & Record<string, unknown>;

export type FormControlClasses<Prefix extends string> = {
    'form-control-plaintext': boolean;
    'form-control-icon': boolean;
    'has-activity': boolean;
    'has-changed': boolean;
    'has-focus': boolean;
    'is-valid': boolean;
    'is-invalid': boolean;
    'is-dirty': boolean;
    'is-empty': boolean;
    size?: FormControlSize<Prefix>
    color?: boolean;
} & Record<string,boolean>

export type CheckedFormControlProps<
    Attributes extends HTMLAttributes,
    Size extends string,
    ModelValue,
    Value
> = FormControlProps<Attributes, Size, ModelValue, Value> & {
    checked?: boolean;
}

export type UseFormControlOptions<
    Attributes extends HTMLAttributes,
    Size extends string,
    ModelValue,
    Value,
    Getter = ModelValue,
    Setter = ModelValue
> = {
    model: ModelRef<ModelValue,string,Getter,Setter>;
    props: FormControlProps<Attributes,Size,ModelValue,Value> | CheckedFormControlProps<Attributes,Size,ModelValue,Value>;
    emit: EmitFn<FormControlEvents<ModelValue>>;
}

export function useFormControl<
    Attributes extends HTMLAttributes,
    Size extends string,
    ModelValue,
    Value,
    Getter = ModelValue|undefined,
    Setter = ModelValue|undefined,
>({ props, emit, model }: UseFormControlOptions<Attributes,Size,ModelValue,Value,Getter,Setter>) {
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

    const controlClasses = computed<FormControlClasses<Size>>(() => ({        
        [props.formControlClass ?? '']: !!props.formControlClass,
        [props.size ?? '']: !!props.size,
        [props.color ?? '']: !!props.color,
        'form-control-plaintext': !!props.plaintext,
        'form-control-icon': hasIcon.value,
        'has-activity': !!props.activity,
        'has-changed': hasChanged.value,
        'has-focus': hasFocus.value,
        'is-valid': isValid.value,
        'is-invalid': isInvalid.value,
        'is-dirty': isDirty.value,
        'is-empty': isEmpty.value,
    }));
    
    const listeners: FormControlListeners<NativeFormControlEvents> = {
        onBlur: (e: FocusEvent) => {
            hasFocus.value = false;
            emit('blur', e);
        },
        onFocus: (e: FocusEvent) => {
            // isDirty.value = true;
            hasFocus.value = true;
            emit('focus', e);
        },
        onFocusin: (e: FocusEvent) => {
            emit('focusin', e);
        },
        onFocusout: (e: FocusEvent) => {
            emit('focusout', e);
        },
        onClick: (e: MouseEvent) => {
            if(props.readonly) {
                e.preventDefault();
            }
            nextTick(() => {
                emit('click', e);
            });
        },
        onDoubleclick: (e: MouseEvent) => {
            emit('doubleclick', e);
        },
        onContextmenu: (e: MouseEvent) => {
            emit('contextmenu', e);
        },
        onMousedown: (e: MouseEvent) => {
            emit('mousedown', e);
        },
        onMouseup: (e: MouseEvent) => {
            emit('mouseup', e);
        },
        onMouseover: (e: MouseEvent) => {
            emit('mouseover', e);
        },
        onMouseout: (e: MouseEvent) => {
            emit('mouseup', e);
        },
        onMouseenter: (e: MouseEvent) => {
            emit('mouseenter', e);
        },
        onMouseleave: (e: MouseEvent) => {
            emit('mouseleave', e);
        },
        onMousemove: (e: MouseEvent) => {
            emit('mousemove', e);
        },
        onChange: (e: Event) => {
            emit('change', e);
        },
        onInput: (e: Event) => {
            emit('input', e);
        },
        onBeforeinput: (e: Event) => {
            emit('beforeinput', e);
        },
        onKeydown: (e: KeyboardEvent) => {
            emit('keydown', e);
        },
        onKeyup: (e: KeyboardEvent) => {
            emit('keyup', e);
        },
        onKeypress: (e: KeyboardEvent) => {
            emit('keypress', e);
        },
        onSelect: (e: Event) => {
            emit('select', e);
        },
        onSelectionchange: (e: Event) => {
            emit('selectionchange', e);
        },
        onInvalid: (e: Event) => {
            emit('invalid', e);
        },
        onSubmit: (e: Event) => {
            emit('submit', e);
        },
        onReset: (e: Event) => {
            emit('reset', e);
        },
        onScroll: (e: Event) => {
            emit('scroll', e);
        },
        onWheel: (e: WheelEvent) => {
            emit('wheel', e);
        },
        onCopy: (e: ClipboardEvent) => {
            emit('copy', e);
        },
        onCut: (e: ClipboardEvent) => {
            emit('cut', e);
        },
        onPaste: (e: ClipboardEvent) => {
            emit('paste', e);
        },
        onTouchstart: (e: TouchEvent) => {
            emit('touchstart', e);
        },
        onTouchend: (e: TouchEvent) => {
            emit('touchend', e);
        },
        onTouchmove: (e: TouchEvent) => {
            emit('touchmove', e);
        },
        onTouchcancel: (e: TouchEvent) => {
            emit('touchcancel', e);
        }
    };

    const controlAttributes = computed<FormControlAttributes<Size,ModelValue>>(() => ({
        ...attrs,
        id: id.value,
        name: props.name,
        class: controlClasses.value,
        disabled: props.disabled,
        readonly: props.readonly
    }));

    onBeforeMount(() => {
        isDirty.value = model.value !== null && model.value !== undefined;
    });

    return {
        attrs,
        controlAttributes,
        controlClasses,
        formGroupClasses,
        hasChanged,
        hasFocus,
        hasIcon,
        isDirty,
        isEmpty,
        isInvalid,
        isValid,
        listeners,
        model,
    };
}