<template>
    <Button @click="$emit('reset')">
    </Button>
</template>

<script setup lang="ts">
import Button from './utils/PreviousButton.vue';

defineEmits<{
    (e: 'reset'): void;
}>();
</script>

<style scoped></style>