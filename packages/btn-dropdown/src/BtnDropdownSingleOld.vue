<script lang="ts">
import { defineComponent } from 'vue';
import DropdownHandler from './DropdownHandler';

export default defineComponent({

    mixins: [
        DropdownHandler
    ]

});
</script>

<template>
    <BtnGroup :class="classes">
        <slot
            name="button"
            v-bind="scope">
            <BtnDropdownAction
                :id="$attrs.id"
                ref="button"
                :expanded="expanded"
                :href="href"
                :to="to"
                :style="toggleStyle"
                :class="toggleClasses"
                @blur="onBlur"
                @click="onClickToggle">
                <slot name="icon" />
                <slot name="label">
                    {{ label }}
                </slot>
            </BtnDropdownAction>
        </slot>
        <DropdownMenu
            :id="$attrs.id"
            ref="menu"
            :align="align"
            :show="expanded"
            :class="{animated: triggerAnimation}"
            @blur="onBlur"
            @click="onClickItem"
            @keydown.tab="onKeydown"
            @mousedown.prevent="">
            <slot />
        </DropdownMenu>
    </BtnGroup>
</template>