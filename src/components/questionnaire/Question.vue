<template>
    <div class="duration-question">
        <div class="options">
            <button v-for="choice in choices" :key="choice" class="option-btn"
                :class="{ 'selected': modelValue === choice }" @click="$emit('update:modelValue', choice)">
                {{ isDurationQuestion ? choice + ' min' : choice }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

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