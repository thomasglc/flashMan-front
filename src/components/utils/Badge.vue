<template>
    <div :class="['badge', currentClass, outlined, 'badge-lg']">
        <i v-if="badge" :class="['fa-solid', badge]"></i>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    badgeClass?: string;
    badge?: string,
}>();
const outlined = props.badgeClass ? "badge-soft" : '';
const currentClass = props.badgeClass ?? "badge-neutral"


</script>