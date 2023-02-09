<script lang="ts" setup>

</script>

<template>
    <div>
        <nav class="flex items-center justify-between bg-neutral-100 w-full h-16 px-4">
            <div class="flex items-center">
                <RouterLink
                    class="font-medium hover:text-neutral-500"
                    active-class="text-blue-500"
                    :to="{name: 'home'}">
                    Home
                </RouterLink>
                <RouterLink
                    class="font-medium hover:text-neutral-500 ml-10"
                    active-class="text-blue-500"
                    :to="{name: 'input-field'}">
                    Input Field
                </RouterLink>
                <RouterLink
                    class="font-medium hover:text-neutral-500 ml-10"
                    active-class="text-blue-500"
                    :to="{name: 'select-field'}">
                    Select Field
                </RouterLink>
            </div>
        </nav>

        <div class="container mx-auto py-10 px-24">
            <RouterView />
        </div>
    </div>
</template>