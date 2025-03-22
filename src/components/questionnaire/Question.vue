<template>
    <div class="duration-question">
        <div class="options">
            <button v-for="choice in choices" :key="choice" class="option-btn btn btn-xl btn-soft btn-primary w-1/3"
                :class="{ 'btn-active': modelValue === choice }" @click="$emit('update:modelValue', choice)">
                {{ isDurationQuestion ? choice + ' min' : choice }}
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    modelValue: number | string | null;
    choices: any[];
    isDurationQuestion?: boolean;
}>(), {
    isDurationQuestion: false
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void;
}>();
</script>

<style scopted>
.options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
</style>