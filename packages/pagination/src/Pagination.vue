<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import type { PaginationSize } from './usePagination.ts';

export type PaginationProps = {
    align?: 'start' | 'end' | 'center';
    disabled?: boolean;
    page?: number;
    showPages?: number;
    totalPages: number;
    size?: PaginationSize;
    color?: string;
    modelValue?: number;
}

const props = withDefaults(defineProps<PaginationProps>(), {
    align: 'start',
    page: 1,
    showPages: 4,
    size: 'pagination-md',
    color: 'pagination-blue-600',
    modelValue: 1
});

const emit = defineEmits<{
    paginate: [page: number];
    'update:modelValue': [page: number];
}>();

const currentPage = ref<number>();

watchEffect(() => {
    currentPage.value = props.modelValue ?? props.page;
});

const classes = computed(() => ({
    'justify-content-center': props.align === 'center',
    'justify-content-start': props.align === 'start',
    'justify-content-end': props.align === 'end',
    [props.size ?? '']: !!props.size,
    [props.color ?? '']: !!props.color
}));

interface PageItem {
    page?: number | string;
    divider?: boolean;
    disabled?: boolean;
    class?: string;
    label?: string;
}

function generatePages(): PageItem[] {
    const pages: PageItem[] = [];
    const current = currentPage.value ?? props.page;
    const total = props.totalPages;
    
    const maxVisible = props.showPages % 2 === 0 ? props.showPages : props.showPages + 1;
    const halfVisible = maxVisible / 2;
    
    let startPage = Math.max(1, current - halfVisible);
    const endPage = Math.min(total, startPage + maxVisible - 1);
    
    if(endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    if(startPage > 1) {
        pages.push({ page: 1 });
        
        if(startPage > 2) {
            pages.push({ divider: true });
        }
    }
    
    for(let i = startPage; i <= endPage; i++) {
        pages.push({ page: i });
    }
    
    if(endPage < total) {
        if(endPage < total - 1) {
            pages.push({ divider: true });
        }
        
        pages.push({
            page: total < Infinity ? total : '∞',
            disabled: total === Infinity
        });
    }
    
    return pages;
}

const pages = computed(() => generatePages());

function paginate(page: number | string | undefined) {
    if(typeof page !== 'number' || page < 1 || page > props.totalPages) {
        return;
    }
    
    currentPage.value = page;
    emit('paginate', page);
    emit('update:modelValue', page);
}

function next() {
    const current = currentPage.value ?? props.page;
    if(current < props.totalPages) {
        paginate(current + 1);
    }
}

function prev() {
    const current = currentPage.value ?? props.page;
    if(current > 1) {
        paginate(current - 1);
    }
}

defineExpose({
    paginate,
    next,
    prev
});
</script>

<template>
    <nav>
        <ul
            class="pagination"
            :class="classes">
            <li
                class="page-item"
                :class="{'disabled': disabled || currentPage === 1}">
                <a
                    href="#"
                    class="page-link"
                    aria-label="Previous"
                    @click.prevent="prev()">
                    <span aria-hidden="true">
                        &laquo;
                    </span>
                </a>
            </li>
            <li
                v-for="(item, i) in pages"
                :key="i"
                :data-page="item.page"
                class="page-item"
                :class="{
                    active: item.page === currentPage,
                    disabled: disabled || !!item.divider || !!item.disabled
                }">
                <slot :item="item">
                    <a
                        v-if="item.divider"
                        class="page-link">
                        &hellip;
                    </a>
                    <a
                        v-else
                        href="#"
                        class="page-link"
                        :class="item.class"
                        :disabled="disabled"
                        :data-label="item.label"
                        @click.prevent="item.page && paginate(item.page)">
                        <span
                            v-if="item.label"
                            aria-hidden="true">
                            {{ item.label }}
                        </span>
                        <span
                            v-if="item.page"
                            aria-hidden="true">
                            {{ item.page }}
                        </span>
                    </a>
                </slot>
            </li>
            <li
                class="page-item"
                :class="{'disabled': disabled || (currentPage ?? 1) >= totalPages}">
                <a
                    href="#"
                    class="page-link"
                    aria-label="Next"
                    @click.prevent="next()">
                    <span aria-hidden="true">
                        &raquo;
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>