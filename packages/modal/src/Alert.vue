<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import Modal, { type ModalProps } from './Modal.vue';

const props = withDefaults(defineProps<ModalProps & {
    buttonLabel?: string;
}>(), {
    backdrop: true,
    buttonBlock: false,
    buttonOrientation: 'horizontal',
    buttonPosition: 'end',
    buttonLabel: 'OK',
    closeButton: false,
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
                return !['buttonLabel'].includes(key);
            })
    );
});

const modal = useTemplateRef<InstanceType<typeof Modal>>('modal');
const confirmButton = useTemplateRef<HTMLButtonElement>('confirmButton');

defineExpose({
    modal,
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
        <template #buttons="{ close }">
            <button
                ref="confirmButton"
                class="btn"
                @click="close()">
                {{ buttonLabel }}
            </button>
        </template>
    </Modal>
</template>