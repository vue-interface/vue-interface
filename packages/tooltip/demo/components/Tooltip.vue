<script lang="ts" setup>
import { ref } from 'vue';

let visible = ref(true);

</script>

<template>
    <div class="">
        <h3 class="mb-2 text-2xl">
            Directive
        </h3>
            
        <div class="flex gap-2">
            <a
                v-tooltip
                href="#"
                title="Top"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Top
            </a>
            <a
                v-tooltip="{placement: 'bottom'}"
                href="#"
                title="Bottom"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Bottom
            </a>
            <a
                v-tooltip.left
                href="#"
                title="Left"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Left
            </a>
            <a
                v-tooltip.right
                href="#"
                title="Right"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Right
            </a>
        </div>

        <h3 class="mt-4 mb-2 text-2xl">
            From Attributes
        </h3>
            
        <div class="flex gap-2">
            <a
                href="#"
                data-tooltip="Top"
                data-tooltip-placement="top"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Top
            </a>
            <a
                href="#"
                title="Bottom"
                data-tooltip-placement="bottom"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Bottom
            </a>
            <a
                href="#"
                data-tooltip="Left"
                data-tooltip-placement="left"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Left
            </a>
            <a
                href="#"
                title="Right"
                data-tooltip-placement="right"
                class="p-2 rounded bg-slate-800 text-white outline-none focus:ring">
                Right
            </a>
        </div>
            
        <h3 class="mt-4 mb-2 text-2xl">
            Automatically inside child components...
        </h3>

        <ViaPlugin v-if="visible" />
    </div>
</template>