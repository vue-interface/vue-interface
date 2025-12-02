<script lang="ts" setup>
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { ref, watch, watchEffect, type Component, type Ref } from 'vue';
import { ActivityIndicatorSize } from '../../activity-indicator/src/ActivityIndicator.vue';

export type BtnActivityProps = {
    activity?: boolean;
    indicator: Component;
    indicatorSize?: ActivityIndicatorSize;
    label?: string;
    orientation?: 'top' | 'bottom' | 'left' | 'right';
    variant?: string;
    size?: string;
    block?: boolean;  
    disabled?: boolean;
};

const props = withDefaults(defineProps<BtnActivityProps>(), {
    indicatorSize: 'xs',
    label: undefined,
    orientation: 'right',
    variant: 'btn-primary',
    size: 'btn-md'
});

export type BtnActivityContext = {
    status: Ref<boolean>;
    toggle: () => void;
}

const emit = defineEmits<{
    click: [event: MouseEvent, context: BtnActivityContext];
    'hide-activity': [];
    'show-activity': [];
}>();

const status = ref(props.activity);

watchEffect(() => {
    status.value = props.activity;
});

watch(status, (value) => {
    if(value) {
        emit('show-activity');
    } 
    else {
        emit('hide-activity');
    }
});

function toggle() {
    status.value = !status.value;
}

const context = {
    status,
    toggle,
};
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        :class="[
            'btn',
            variant,
            size,
            {
                'w-full': block,
                'gap-1': ['xs', 'sm'].includes(indicatorSize),
                'gap-2': ['md', 'lg', 'xl'].includes(indicatorSize),
                'flex-col-reverse': orientation === 'top',
                'flex-col': orientation === 'bottom',
                'flex-row-reverse': orientation === 'left',
                'inline-flex items-center justify-center': true,
                'opacity-50 cursor-not-allowed': disabled,
            }
        ]"
        @click="emit('click', $event, context)"> 
        <slot>{{ label }}</slot>
        <Transition
            enter-active-class="transition-all ease-out duration-250"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all ease-in duration-250"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <ActivityIndicator
                v-if="status"
                :type="indicator"
                :size="indicatorSize"
                :class="{
                    'pt-1': orientation === 'top',
                    'pb-1': orientation === 'bottom',
                    'pr-1': orientation === 'left',
                    'pl-1': orientation === 'right',
                }" />
        </Transition>
    </button>
</template>