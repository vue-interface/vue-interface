<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

const props = withDefaults(defineProps<{
    align?: 'start' | 'end' | 'center';
    disabled?: boolean;
    page?: number;
    showPages?: number;
    totalPages: number;
    size?: 'sm' | 'lg';
}>(), {
    align: 'center',
    page: 1,
    showPages: 6
});

const emit = defineEmits<{
    (e: 'paginate', page: number)
}>();

const currentPage = ref<number>();

watchEffect(() => currentPage.value = props.page);

const classes = computed(() => ({
    'justify-content-center': props.align === 'center',
    'justify-content-start': props.align === 'start',
    'justify-content-end': props.align === 'end',
    [`pagination-${props.size}`]: !!props.size
}));

function generate() {
    const pages = [];

    const showPages = props.showPages % 2
        ? props.showPages + 1
        : props.showPages;

    let startPage = (currentPage.value >= showPages)
        ? currentPage.value - (showPages / 2)
        : 1;

    const startOffset = showPages + startPage;

    const endPage = props.totalPages < startOffset
        ? props.totalPages
        : startOffset;

    const diff = startPage - endPage + showPages;

    startPage -= (startPage - diff > 0) ? diff : 0;

    if(startPage > 1) {
        pages.push({ page: 1 });
    }

    if(startPage > 2) {
        pages.push({ divider: true });
    }

    for(let i = startPage; i < endPage; i++) {
        pages.push({ page: i });
    }

    if(endPage <= props.totalPages) {
        if(props.totalPages - 1 > endPage) {
            pages.push({ divider: true });
        }

        pages.push({
            page: props.totalPages < Infinity ? props.totalPages : '&#8734;',
            disabled: props.totalPages === Infinity
        });
    }

    return pages;
}

const pages = computed(() => generate());

function paginate(page: number) {
    currentPage.value = page;
    
    emit('paginate', page);
}

function next() {
    paginate(
        currentPage.value >= props.totalPages
            ? currentPage.value
            : currentPage.value + 1
    );
}

function prev() {
    paginate(
        currentPage.value <= 1
            ? currentPage.value
            : currentPage.value - 1
    );
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
                        @click.prevent="paginate(item.page)">
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
                :class="{'disabled': disabled || currentPage >= totalPages}">
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