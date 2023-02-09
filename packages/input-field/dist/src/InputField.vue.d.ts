declare const _sfc_main: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").DefineComponent<{
    modelValue: {
        default: undefined;
    };
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    nativeEvents: {
        type: ArrayConstructor;
        default(): string[];
    };
    defaultControlClass: {
        type: StringConstructor;
        default: () => any;
    };
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    errors: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    group: {
        type: BooleanConstructor;
        default: () => any;
    };
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideLabel: BooleanConstructor;
    indicator: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => any;
    };
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    inline: BooleanConstructor;
    invalid: BooleanConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    pill: BooleanConstructor;
    plaintext: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: undefined;
    };
    spacing: {
        type: StringConstructor;
        default: undefined;
    };
    valid: BooleanConstructor;
}, unknown, {
    defaultEmpty: boolean;
    hasChanged: boolean;
    hasFocus: boolean;
    isEmpty: boolean;
}, {
    id(): any;
    componentName(): any;
    controlAttributes(): {
        [k: string]: unknown;
    };
    controlClass(): any;
    controlSizeClass(): string;
    formGroupClasses(): {
        [x: number]: boolean;
        animated: any;
        'default-empty': any;
        'form-group': any;
        'has-activity': any;
        'has-changed': any;
        'has-focus': any;
        'has-icon': boolean;
        'is-empty': any;
        'is-invalid': boolean;
        'is-valid': boolean;
    } & (false | {
        [x: string]: boolean;
    });
    controlClasses(): any;
    hasDefaultSlot(): boolean;
    invalidFeedback(): any;
    pillClasses(): "rounded rounded-pill";
    plaintextClass(): "form-control-plaintext";
    validFeedback(): any;
}, {
    bindEvents(el: HTMLOptionElement | HTMLSelectElement, fn: Function): void;
    blur(): void;
    focus(): void;
    getInputField(): any;
    getFieldErrors(): any;
    shouldChangeOnFocus(): boolean;
    onInput(value: any): void;
}, import("vue").DefineComponent<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    shadowableClass(): {
        [x: string]: boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    shadow: string | boolean;
    dropShadow: string | boolean;
    dropShadowableClassPrefix: string;
    shadowableClassPrefix: string;
}>, import("vue").ComponentOptionsMixin, ("blur" | "change" | "click" | "focus" | "keydown" | "keypress" | "keyup" | "update:modelValue")[], "blur" | "change" | "click" | "focus" | "keydown" | "keypress" | "keyup" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: undefined;
    };
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    nativeEvents: {
        type: ArrayConstructor;
        default(): string[];
    };
    defaultControlClass: {
        type: StringConstructor;
        default: () => any;
    };
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    errors: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    group: {
        type: BooleanConstructor;
        default: () => any;
    };
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideLabel: BooleanConstructor;
    indicator: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => any;
    };
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    inline: BooleanConstructor;
    invalid: BooleanConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    pill: BooleanConstructor;
    plaintext: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: undefined;
    };
    spacing: {
        type: StringConstructor;
        default: undefined;
    };
    valid: BooleanConstructor;
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: undefined;
    activity: boolean;
    animated: boolean;
    nativeEvents: unknown[];
    defaultControlClass: string;
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    group: boolean;
    helpText: string | number;
    hideLabel: boolean;
    indicator: string | boolean;
    indicatorSize: string;
    inline: boolean;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    pill: boolean;
    plaintext: boolean;
    size: string;
    spacing: string;
    valid: boolean;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
