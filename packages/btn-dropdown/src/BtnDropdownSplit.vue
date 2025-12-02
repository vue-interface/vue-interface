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
    onBlur,
    onClick,
    onClickToggle,
    onClickItem
} = useDropdownHandler(props, emit);
</script>

<template>
    <div
        class="btn-group btn-dropdown-split"
        :class="classes">
        <slot
            v-if="!dropleft"
            name="button"
            v-bind="{ expanded, onBlur, onClickToggle }">
            <button
                type="button"
                :class="buttonClasses"
                aria-haspopup="true"
                :aria-expanded="expanded"
                @blur="onBlur"
                @click="onClick">
                {{ label }}
            </button>
        </slot>
        <div class="btn-group">
            <slot
                name="toggle"
                v-bind="{ target: (el: HTMLElement) => target = el, expanded, onBlur, onClickToggle }">
                <button
                    ref="target"
                    type="button"
                    aria-haspopup="true"
                    :aria-expanded="expanded"
                    :class="{...buttonClasses, 'dropdown-toggle': true, 'dropdown-toggle-split': split}"
                    @blur="onBlur"
                    @click="onClickToggle" />
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
        <slot
            v-if="dropleft"
            name="button"
            v-bind="{ expanded, onBlur, onClickToggle }">
            <button
                type="button"
                :class="buttonClasses"
                aria-haspopup="true"
                :aria-expanded="expanded"
                @blur="onBlur"
                @click="onClick">
                {{ label }}
            </button>
        </slot>
    </div>
</template>