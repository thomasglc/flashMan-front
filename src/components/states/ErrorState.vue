<template>
    <div class="error">
        <i class="fas fa-exclamation-circle"></i>
        <span>{{ message }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>

<style scoped>
.error {
    text-align: center;
    padding: 2rem;
    color: #dc3545;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.error i {
    font-size: 1.2rem;
}
</style>