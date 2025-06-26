<script lang="ts" setup>
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { Btn, type BtnProps } from '@vue-interface/btn';
import { ref, watch, watchEffect, type Component, type Ref } from 'vue';

export type BtnActivityProps = {
    activity?: boolean;
    indicator: Component;
    indicatorSize?: string;
    label?: string;
    orientation?: 'top' | 'bottom' | 'left' | 'right';
};

const props = withDefaults(defineProps<BtnActivityProps & BtnProps>(), {
    orientation: 'right',
    variant: 'btn-primary'
});

export type BtnActivityContext = {
    status: Ref<boolean>;
    toggle: Function;
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
    <Btn
        v-bind="props"
        :class="{
            'gap-1': !indicatorSize || ['xs', 'sm'].includes(indicatorSize),
            'gap-2': ['md', 'lg', 'xl'].includes(indicatorSize),
            'flex-col flex-col-reverse': orientation === 'top',
            'flex-col': orientation === 'bottom',
            'flex-row-reverse': orientation === 'left',
        }"
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
                :size="indicatorSize ?? 'xs'"
                :class="{
                    'pt-1': orientation === 'top',
                    'pb-1': orientation === 'bottom',
                    'pr-1': orientation === 'left',
                    'pl-1': orientation === 'right',
                }" />
        </Transition>
    </Btn>
</template>
