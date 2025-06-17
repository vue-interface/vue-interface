<script setup lang="ts">
import { DropdownMenu } from '@vue-interface/dropdown-menu';
import { BtnDropdownEvents, BtnDropdownProps, useDropdownHandler } from './useDropdownHandler';

const props = withDefaults(defineProps<BtnDropdownProps>(), {
    caret: true,
    variant: 'btn-primary'
});

const emit = defineEmits<BtnDropdownEvents>();

const {
    target,
    menu,
    buttonClasses,
    classes,
    expanded,
    floatingStyles,
    side,
    onBlur,
    onClickToggle,
    onClickItem
} = useDropdownHandler(props, emit);
</script>

<template>
    <div
        class="btn-group"
        :class="classes">
        <slot
            name="button"
            v-bind="{ target: (el: HTMLElement) => target = el, expanded, onBlur, onClickToggle }">
            <button
                ref="target"
                type="button"
                :class="{...buttonClasses, ['dropdown-toggle']: true}"
                aria-haspopup="true"
                :aria-expanded="expanded"
                @blur="onBlur"
                @click="onClickToggle">
                {{ label }}
            </button>
        </slot>
        <DropdownMenu
            ref="menu"
            :class="{
                'show': expanded
            }"
            :style="floatingStyles"
            @blur="onBlur"
            @click="onClickItem"
            @mousedown.prevent>
            <slot />
        </DropdownMenu>
    </div>
</template>