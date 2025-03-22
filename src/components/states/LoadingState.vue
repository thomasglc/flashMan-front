<template>
    <div class="flex flex-col gap-4">
        <div class="skeleton h-12 w-2/3"></div>
        <hr class="h-px border-0 bg-gray-700">
        <div class="flex flex-row gap-4">
            <div class="skeleton h-7 w-28"></div>
            <div class="skeleton h-7 w-28"></div>
        </div>
        <div class="skeleton mt-3 h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    message?: string;
}>(), {
    message: 'Chargement...'
});
</script>

<style scoped>
.loading {
    text-align: center;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.loading i {
    font-size: 1.2rem;
    color: #666;
}
</style>