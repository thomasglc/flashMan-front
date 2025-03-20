<template>
    <div class="duration-question">
        <div class="options">
            <Button v-for="choice in choices" :key="choice" class="option-btn"
                :class="{ 'selected': modelValue === choice }" @click="$emit('update:modelValue', choice)">
                {{ isDurationQuestion ? choice + ' min' : choice }}
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../utils/button.vue';


const props = defineProps<{
    modelValue: number | string | null;
    choices: any[];
    isDurationQuestion?: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void;
}>();

const isDurationQuestion = props.isDurationQuestion ?? false; 
</script>

<style scopted>
.options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
}
</style>