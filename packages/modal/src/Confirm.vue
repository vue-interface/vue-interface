<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import Modal, { type ModalContext, type ModalProps } from './Modal.vue';

const props = withDefaults(defineProps<ModalProps & {
    cancelLabel?: string;
    confirmLabel?: string;
}>(), {
    backdrop: true,
    buttonBlock: false,
    buttonOrientation: 'horizontal',
    buttonPosition: 'end',
    closeButton: false,
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    content: undefined,
    dismissable: true,
    footer: true,
    icon: undefined,
    show: false,
    title: undefined,
    type: 'info',
});

const modalProps = computed(() => {
    return Object.fromEntries(
        Object.entries(props)
            .filter(([key]) => {
                return !['cancelLabel', 'confirmLabel'].includes(key);
            })
    );
});

const emit = defineEmits<{
    confirm: [button: HTMLButtonElement, context: ModalContext]
}>();

const modal = useTemplateRef<InstanceType<typeof Modal>>('modal');
const cancelButton = useTemplateRef<HTMLButtonElement>('cancelButton');
const confirmButton = useTemplateRef<HTMLButtonElement>('confirmButton');

defineExpose({
    modal,
    cancelButton,
    confirmButton,
    props: modal.value?.props,
    open: modal.value?.open,
    close: modal.value?.close,
});
</script>

<template>
    <Modal
        ref="modal"
        v-bind="modalProps">
        <slot />
        <template #title>
            <slot name="title" />
        </template>
        <template #content>
            <slot name="content" />
        </template>
        <template #buttons="context">
            <button
                ref="cancelButton"
                class="btn btn-outline-secondary"
                :class="{'flex-1': buttonBlock}"
                @click="context.close()">
                {{ cancelLabel }}
            </button>
            <button
                ref="confirmButton"
                class="btn"
                :class="{
                    'flex-1': buttonBlock,
                    'btn-primary': type === 'info',
                    'btn-warning': type === 'warning',
                    'btn-danger': type === 'critical',
                    'btn-success': type === 'success',
                }"
                @click="emit('confirm', confirmButton!, context)">
                {{ confirmLabel }}
            </button>
        </template>
    </Modal>
</template>