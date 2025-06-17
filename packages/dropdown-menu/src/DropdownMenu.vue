<script setup lang="ts">
export type DropdownMenuProps = {
    align?: 'left' | 'right',
    show?: boolean
};

withDefaults(defineProps<DropdownMenuProps>(), {
    align: 'left'
});
</script>

<template>
    <div
        class="dropdown-menu"
        :aria-labelledby="($attrs.id as string|undefined)"
        :class="{
            'dropdown-menu-left': align === 'left',
            'dropdown-menu-right': align === 'right',
            'show': show
        }">
        <slot />
    </div>
</template>