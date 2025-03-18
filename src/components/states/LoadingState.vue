<template>
    <div class="loading">
        <i class="fas fa-spinner fa-spin"></i>
        <span>{{ message }}</span>
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