<template>
    <div :class="['badge', `badge-${selectedcolor}`, 'badge-lg', outlined]">
        <i v-if="badge" :class="['fa-solid', badge]"></i>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    color?: string;
    badge?: string,
}>();
const outlined = props.color ? "badge-outline" : '';
const selectedcolor = props.color ?? 'neutral';
console.log(selectedcolor)
</script>