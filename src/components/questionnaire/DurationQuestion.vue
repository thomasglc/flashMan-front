<template>
    <div class="duration-question">
        <div class="options">
            <button v-for="duration in durations" :key="duration" class="option-btn"
                :class="{ 'selected': modelValue === duration }" @click="$emit('update:modelValue', duration)">
                {{ duration === 30 ? '30+ min' : duration + ' min' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Duration } from '@/types/filters';

const props = defineProps<{
    modelValue: Duration | null;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: Duration): void;
}>();

const durations = [5, 10, 20, 30] as const;
</script>