<template>
    <div :class="['badge', currentClass, outlined, size, 'p-4']">
        <i v-if="icon" :class="['fa-solid', icon]"></i>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    badgeClass?: string;
    icon?: string,
    size?: string,
}>();
const size = props.size ?? "badge-lg";
const outlined = props.badgeClass ? "badge-soft" : '';
const currentClass = props.badgeClass ?? "badge-neutral"


</script>