import { flip, offset, Placement, type Alignment, type Middleware, type OffsetOptions, type Side } from '@floating-ui/dom';
import { useFloating } from '@floating-ui/vue';
import type { DropdownMenu } from '@vue-interface/dropdown-menu';
import { computed, ref, watchEffect, type EmitFn, type HTMLAttributes } from 'vue';

type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);

export type BtnGroupSizes = 'btn-group-xs'
    | 'btn-group-sm' 
    | 'btn-group-md'
    | 'btn-group-lg'
    | 'btn-group-xl'
    | 'btn-group-2xl'
    | 'btn-group-3xl'
    | 'btn-group-4xl';

export type BtnDropdownProps = {
    align?: Alignment;
    block?: boolean;
    buttonClass?: HTMLAttributes['class'],
    caret?: boolean;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    label?: string;
    offset?: OffsetOptions,
    middleware?: Middleware[],
    side?: Side;
    size?: LiteralUnion<BtnGroupSizes>;
    split?: boolean;
    variant?: string;
}

export type BtnDropdownEvents = {
    click: [event: MouseEvent];
    clickToggle: [event: MouseEvent];
    show: [],
    hide: []
}

export function useDropdownHandler(props: BtnDropdownProps, emit: EmitFn<BtnDropdownEvents>) {
    const target = ref<HTMLElement>();
    const menu = ref<InstanceType<typeof DropdownMenu>>();
    const expanded = ref(false);


    const alignment = computed<Alignment>(() => props.align ?? 'start');

    const side = computed<Side>(() => {
        if(props.dropup) {
            return 'top';
        }

        if(props.dropleft) {
            return 'left';
        }

        if(props.dropright) {
            return 'right';
        }

        return 'bottom';
    });

    const placement = computed<Placement>(() => `${side.value}-${alignment.value}`);

    const classes = computed(() => ({
        'dropdown': props.dropup && props.dropright && props.dropleft,
        'dropup': props.dropup,
        'dropright': props.dropright,
        'dropleft': props.dropleft,
        'expanded': expanded.value,
        [props.size ?? '']: !!props.size,
    }));
    
    const buttonClasses = computed(() => {
        const classes = {
            btn: true,
            [props.variant ?? '']: !!props.variant,
            'btn-block': !!props.block,
            'no-caret': !props.caret
        };
        
        if(typeof props.buttonClass === 'string') {
            classes[props.buttonClass] = true;
        }
        else if(Array.isArray(props.buttonClass)) {
            for(const value of props.buttonClass) {
                classes[value] = true;
            }
        }
        else if(props.buttonClass) {
            Object.assign(classes, props.buttonClass);
        }

        return classes;
    });

    const { floatingStyles, update } = useFloating(target, menu, {
        placement: placement,
        middleware: props.middleware ?? [
            offset(props.offset ?? 5),
            flip()
        ]
    });

    function show() {
        expanded.value = true;

        if(!target.value || !menu.value) {
            return;
        }

        update();

        emit('show');
    }

    function hide() {
        expanded.value = false;

        target.value?.blur();

        emit('hide');
    }

    function toggle() {
        if(!expanded.value) {
            show();
        }
        else {
            hide();
        }
    }

    function isFocusable(element: HTMLElement) {
        const nodes = Array.from(menu.value?.$el.querySelectorAll('label, input, select, textarea') ?? []);

        for(const i in nodes) {
            if(element === nodes[i]) {
                return true;
            }
        }

        return false;
    }
        
    function onBlur(e: FocusEvent) {
        if(!(e.relatedTarget instanceof HTMLElement)) {
            hide();
            
            return;
        }
        
        if(menu.value && !menu.value?.$el.contains(e.relatedTarget) || !target.value?.contains(e.relatedTarget)) {
            hide();
        }
    }

    function onClick(e: MouseEvent) {
        emit('click', e);
    }

    function onClickToggle(e: MouseEvent) {
        e.target?.dispatchEvent(new Event('focus', e));
            
        emit('clickToggle', e);

        if(!e.defaultPrevented) {
            toggle();
        }
    }

    function onClickItem(e: PointerEvent) {
        if(!(e.target instanceof HTMLElement)) {
            hide();

            return;
        }

        if(!isFocusable(e.target) && !e.defaultPrevented) {
            hide();
        }
    }

    watchEffect(() => {
        if(expanded.value) {
            window.addEventListener('resize', update);
        }
        else {
            window.removeEventListener('resize', update);
        }
    });

    return {
        target,
        menu,
        alignment,
        expanded,
        floatingStyles,
        placement,
        side,
        classes,
        buttonClasses,
        show,
        hide,
        toggle,
        onBlur,
        onClick,
        onClickToggle,
        onClickItem
    };
}