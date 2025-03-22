<template>
    <div class="slide-transition">
        <Transition mode="out-in" :name="isReverse ? 'slide-reverse' : 'slide'" v-bind="$attrs">
            <slot></slot>
        </Transition>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    inheritAttrs: false
});

defineProps<{
    isReverse?: boolean;
}>();
</script>

<style scoped>
.slide-transition {
    --slide-distance: 50px;
}

.slide-enter-active,
.slide-leave-active,
.slide-reverse-enter-active,
.slide-reverse-leave-active {
    transition: all 0.2s linear;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(var(--slide-distance));
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(calc(var(--slide-distance) * -1));
}

.slide-reverse-enter-from {
    opacity: 0;
    transform: translateX(calc(var(--slide-distance) * -1));
}

.slide-reverse-leave-to {
    opacity: 0;
    transform: translateX(var(--slide-distance));
}
</style>