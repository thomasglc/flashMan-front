<template>
    <DefaultTransition>
        <div class='xl:flex'>
            <div v-for="n in number" :key="number"
                class='maneuver-card card bg-base-200 shadow-md m-8 xl:h-60 xl:w-1/2'>
                <div class="flex flex-col gap-4 p-5">
                    <div class="skeleton h-10 w-2/3"></div>

                    <div class="skeleton mt-3 h-4 w-full"></div>
                    <div class="skeleton h-4 w-full"></div>
                    <hr class="mt-3 h-px border-0 bg-gray-700">
                    <div class="flex flex-row gap-4">
                        <div class="skeleton h-7 w-28"></div>
                        <div class="skeleton h-7 w-28"></div>
                        <div class="skeleton h-7 w-28"></div>
                    </div>
                </div>
            </div>

        </div>
    </DefaultTransition>


</template>

<script setup lang="ts">
import DefaultTransition from '../transitions/DefaultTransition.vue';

withDefaults(defineProps<{
    number?: number;
}>(), {
    number: 2
});

</script>

<style scoped>
.maneuver-card {
    transition: all 0.3s;
    animation: fade 0.9s;
}

@keyframes fade {
    0% {
        translate: 50px;
        opacity: 0;
    }
}

@media(max-width:800px) {
    @keyframes fade {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
    }
}
</style>