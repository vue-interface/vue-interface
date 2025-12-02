<script setup lang="ts">
import { computed, FunctionalComponent, onMounted, onUnmounted, ref, watchEffect, useAttrs, type Component, type RenderFunction } from 'vue';
import CheckCircleIcon from '../src/CheckCircleIcon.vue';
import ExclamationCircleIcon from '../src/ExclamationCircleIcon.vue';
import ExclamationTriangleIcon from '../src/ExclamationTriangleIcon.vue';
import InfoCircleIcon from '../src/InfoCircleIcon.vue';
import XMarkIcon from '../src/XMarkIcon.vue';

export type ModalSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'screen';

export type ModalProps = {
    buttonBlock?: boolean,
    buttonOrientation?: 'horizontal' | 'vertical',
    buttonPosition?: 'start' | 'center' | 'end',
    backdrop?: boolean;
    dismissable?: boolean;
    closeButton?: boolean;
    content?: string | Component;
    footer?: boolean;
    icon?: FunctionalComponent | Component | RenderFunction | boolean;
    show?: boolean;
    title?: string | Component;
    trigger?: string | Element | (() => Element);
    type?: 'info' | 'warning' | 'critical' | 'danger' | 'success';
    size?: ModalSize;
    buttons?: (context: ModalContext) => any;
    colors?: {
        info?: string;
        warning?: string;
        critical?: string;
        danger?: string;
        success?: string;
    }
}

const props = withDefaults(defineProps<ModalProps>(), {
    backdrop: true,
    buttonBlock: false,
    buttonOrientation: 'horizontal',
    buttonPosition: 'end',
    dismissable: true,
    closeButton: false,
    footer: true,
    icon: undefined,
    content: undefined,
    show: false,
    title: undefined,
    trigger: undefined,
    type: 'info',
    colors: () => ({
        info: 'modal-primary',
        warning: 'modal-warning',
        critical: 'modal-danger',
        danger: 'modal-danger',
        success: 'modal-success'
    })
});

const mounted = ref(false);
const showing = ref(props.show);

if(typeof document === 'object') {
    const overflow = document.body.style.overflow;

    watchEffect(() => {
        if(showing.value) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = overflow;
        }
    });
}

const icon = computed(() => {
    if(props.icon === undefined || props.icon === true) {
        return {
            info: InfoCircleIcon,
            warning: ExclamationTriangleIcon,
            critical: ExclamationCircleIcon,
            danger: ExclamationCircleIcon,
            success: CheckCircleIcon
        }[props.type];
    }

    if(props.icon) {
        return props.icon;
    }

    return undefined;
});

const emit = defineEmits<{
    confirm: [button: HTMLButtonElement, context: ModalContext];
    'close-modal': [];
    'open-modal': [];
}>();

async function open(): Promise<void> {
    showing.value = true;
        
    return new Promise(resolve => {
        mounted.value = true;

        setTimeout(() => {
            emit('open-modal');
            resolve();
        }, 300);
    });
}

async function close(): Promise<void> {
    return new Promise(resolve => {
        mounted.value = false;

        setTimeout(() => {
            showing.value = false;
            emit('close-modal');
            resolve();
        }, 200);
    });
}

export type ModalContext ={
    props: ModalProps;
    open: () => Promise<void>;
    close: () => Promise<void>;
}

const context: ModalContext = {
    props,
    open,
    close
};

defineExpose(context);

const trigger = computed(() => {
    if(typeof props.trigger === 'string') {
        return document.querySelector(props.trigger);
    }
    
    if(typeof props.trigger === 'function') {
        return props.trigger?.();
    }

    return props.trigger;
});

function onClickTrigger() {
    if(showing.value) {
        close();
    }
    else {
        open();
    }
}

onMounted(() => {
    mounted.value = props.show;
    
    if(trigger.value) {
        trigger.value.addEventListener('click', onClickTrigger);
    }
});

onUnmounted(() => {
    if(trigger.value) {
        trigger.value.removeEventListener('click', onClickTrigger);
    }
});

const attrs = useAttrs();
</script>

<template>
    <Teleport to="body">
        <div
            v-show="showing"
            class="modal"
            :class="[
                {[colors[props.type] ?? '']: !attrs.class && colors[type], 
                 show: showing}, 
                `modal-${props.size}`]"
            v-bind="$attrs"
            aria-labelledby="modal"
            role="dialog"
            aria-modal="true">
            <Transition
                enter-from-class="opacity-0"
                enter-active-class="ease-out duration-300"
                enter-to-class="opacity-100"
                leave-from-class="opacity-100"
                leave-active-class="ease-in duration-200"
                leave-to-class="opacity-0">
                <div
                    v-if="mounted && backdrop"
                    class="modal-backdrop"
                    @click.self="dismissable && close()" />
            </Transition>
            <Transition
                enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-active-class="ease-out duration-100"
                enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                leave-active-class="ease-in duration-200"
                leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div
                    v-if="mounted"
                    class="modal-container">
                    <slot
                        name="close-button"
                        v-bind="context">
                        <template v-if="closeButton">
                            <button
                                type="button"
                                class="modal-close-button"
                                @click="close()">
                                <XMarkIcon />
                            </button>
                        </template>
                    </slot>
                    <div class="modal-header">
                        <slot 
                            name="icon" 
                            v-bind="context">
                            <div
                                v-if="icon"
                                class="modal-header-icon">
                                <Component
                                    :is="icon"
                                    class="w-6 h-6" />
                            </div>
                        </slot>
                        <div class="modal-header-text">
                            <slot 
                                name="title" 
                                v-bind="context">
                                <div
                                    v-if="typeof title === 'string'"
                                    id="modal-title"
                                    class="modal-title">
                                    {{ title }}
                                </div>
                                <Component
                                    :is="title"
                                    v-else-if="title" />
                            </slot>
                                
                            <slot 
                                name="body" 
                                v-bind="context">
                                <div class="modal-body">
                                    <slot>
                                        <p v-if="typeof content === 'string'">
                                            {{ content }}
                                        </p>
                                        <Component
                                            :is="content"
                                            v-else-if="content" />
                                    </slot>
                                </div>
                            </slot>
                        </div>
                    </div>
                    <slot
                        name="footer"
                        v-bind="context">
                        <div 
                            v-if="footer" 
                            class="modal-footer"
                            :class="{
                                'sm:justify-end sm:flex-row-reverse': buttonPosition === 'start',
                                'sm:justify-center': buttonPosition === 'center',
                                'sm:justify-end': buttonPosition === 'end',
                                'sm:flex-row': buttonOrientation === 'horizontal',
                                'sm:flex-col': buttonOrientation === 'vertical',
                            }">
                            <slot
                                name="buttons"
                                v-bind="context">
                                <Component
                                    v-if="buttons"
                                    :is="buttons"
                                    v-bind="context" />
                            </slot>
                        </div>
                    </slot>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>