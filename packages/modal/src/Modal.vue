<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect, type Component, type RenderFunction } from 'vue';
import CheckCircleIcon from './CheckCircleIcon.vue';
import ExclamationCircleIcon from './ExclamationCircleIcon.vue';
import ExclamationTriangleIcon from './ExclamationTriangleIcon.vue';
import InfoCircleIcon from './InfoCircleIcon.vue';
import XMarkIcon from './XMarkIcon.vue';

export interface Button {
    class?: string;
    disabled?: boolean;
    name?: string;
    label?: string;
    size?: string;
    outline?: boolean;
    variant?: string;
    onClick?: Function;
}

export type ModalProps = {
    buttonBlock?: boolean,
    buttonOrientation?: 'horizontal' | 'vertical',
    buttonPosition?: 'start' | 'center' | 'end',
    backdrop?: boolean;
    dismissable?: boolean;
    closeButton?: boolean;
    content?: string | Component;
    footer?: boolean;
    icon?: Function | Component | RenderFunction | boolean;
    show?: boolean;
    title?: string | Component;
    trigger?: string | Element | (() => Element);
    type?: 'info' | 'warning' | 'critical' | 'success'
    colors?: {
        info?: string;
        warning?: string;
        critical?: string;
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
    type: 'info'
});

const mounted = ref(false);
const showing = ref(props.show);

const colors = computed(() => Object.assign({
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-amber-100 text-amber-600',
    critical: 'bg-rose-100 text-rose-800',
    success: 'bg-emerald-100 text-emerald-800'
}, props.colors));

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
            success: CheckCircleIcon
        }[props.type];
    }

    if(props.icon) {
        return props.icon;
    }

    return undefined;
});

async function open(): Promise<void> {
    showing.value = true;
        
    return new Promise(resolve => {
        mounted.value = true;

        setTimeout(() => {
            resolve();
        }, 300);
    });
}

async function close(): Promise<void> {
    return new Promise(resolve => {
        mounted.value = false;

        setTimeout(() => {
            showing.value = false;

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
</script>

<template>
    <Teleport to="body">
        <div
            v-show="showing"
            class="relative z-10"
            aria-labelledby="modal-title"
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
                    class="fixed inset-0 bg-stone-500 dark:bg-stone-950 bg-opacity-75 dark:bg-opacity-75 transition-opacity" />
            </Transition>

            <div
                class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    @click.self="dismissable && close()">
                    <Transition
                        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-active-class="ease-out duration-100"
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-active-class="ease-in duration-200"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div
                            v-if="mounted"
                            class="relative transform text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <slot
                                name="close-button"
                                v-bind="context">
                                <template v-if="closeButton">
                                    <button
                                        type="button"
                                        class="absolute top-3 right-3 text-stone-500 hover:text-stone-600 active:text-stone-700"
                                        @click="close()">
                                        <XMarkIcon />
                                    </button>
                                </template>
                            </slot>
                            <div
                                class="bg-white dark:bg-stone-800 rounded-t-lg text-stone-900 dark:text-stone-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-6"
                                :class="{'min-h-[7rem] rounded-b-lg': !footer}">
                                <div class="sm:flex sm:items-start">
                                    <slot
                                        name="icon"
                                        v-bind="context">
                                        <div
                                            v-if="icon"
                                            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mr-4 sm:h-10 sm:w-10"
                                            :class="{[colors[type]]: !!colors[type]}">
                                            <Component
                                                :is="icon"
                                                class="w-6 h-6" />
                                        </div>
                                    </slot>
                                    <div class="mt-3 flex-1 text-center sm:mt-0 sm:text-left">
                                        <slot
                                            name="title"
                                            v-bind="context">
                                            <h3
                                                v-if="typeof title === 'string'"
                                                id="modal-title"
                                                class="text-base font-semibold leading-6">
                                                {{ title }}
                                            </h3>
                                            <Component
                                                :is="title"
                                                v-else-if="title" />
                                        </slot>
                                        <slot
                                            name="content"
                                            v-bind="context">
                                            <div class="mt-2">
                                                <slot>
                                                    <p
                                                        v-if="typeof content === 'string'"
                                                        class="text-sm text-stone-500">
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
                            </div>
                            <slot
                                name="footer"
                                v-bind="context">
                                <div
                                    v-if="footer"
                                    class="bg-stone-50 dark:bg-stone-900 px-4 py-3 sm:flex sm:px-4 sm:gap-2 rounded-b-lg"
                                    :class="{
                                        'sm:justify-end sm:flex-row-reverse': buttonPosition === 'start',
                                        'sm:justify-center': buttonPosition === 'center',
                                        'sm:justify-end': buttonPosition === 'end',
                                        'sm:flex-row': buttonOrientation === 'horizontal',
                                        'sm:flex-col': buttonOrientation === 'vertical',
                                    }">
                                    <slot
                                        name="buttons"
                                        v-bind="context" />
                                </div>
                            </slot>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </Teleport>
</template>