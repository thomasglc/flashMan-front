<template>
    <Transition mode="out-in" name="slide" v-bind="$attrs">
        <slot></slot>
    </Transition>
</template>

<script setup lang="ts">
defineOptions({
    inheritAttrs: false
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
</style>