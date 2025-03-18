<template>
    <div class="people-count-question">
        <div class="options">
            <button v-for="count in peopleCounts" :key="count" class="option-btn"
                :class="{ 'selected': modelValue === (typeof count === 'string' ? 5 : count) }"
                @click="$emit('update:modelValue', typeof count === 'string' ? 5 : count)">
                {{ count }} {{ typeof count === 'number' && count === 1 ? 'personne' : 'personnes' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: number | null;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
}>();

const peopleCounts = [1, 2, 3, 4, '5+'] as const;
</script>