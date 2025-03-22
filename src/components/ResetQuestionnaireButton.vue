<template>
    <Button @click="$emit('reset')">
        <i class="fas fa-rotate-left"></i>
    </Button>
</template>

<script setup lang="ts">
import Button from './utils/PreviousButton.vue';

defineEmits<{
    (e: 'reset'): void;
}>();
</script>
