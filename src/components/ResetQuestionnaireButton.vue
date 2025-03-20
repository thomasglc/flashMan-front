<template>
    <Button @click="$emit('reset')">
        <i class="fas fa-redo-alt"></i>
    </Button>
</template>

<script setup lang="ts">
import Button from './utils/button.vue';

defineEmits<{
    (e: 'reset'): void;
}>();
</script>

<style scoped>
.reset-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background-color: #4299e1;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.reset-button:hover {
    background-color: #3182ce;
}

.reset-button i {
    font-size: 0.9rem;
}
</style>