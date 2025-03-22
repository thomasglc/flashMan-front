<template>
    <div :class="{ 'xl:flex': inCard }">
        <DefaultTransition>
            <div v-for="n in number" :key="number"
                :class="{ ' card bg-base-200 shadow-md m-8 xl:h-60 xl:w-1/2': inCard, }">
                <div class="flex flex-col gap-4 p-5">
                    <div class="skeleton h-12 w-2/3"></div>
                    <hr class="h-px border-0 bg-gray-700">
                    <div class="flex flex-row gap-4">
                        <div class="skeleton h-7 w-28"></div>
                        <div class="skeleton h-7 w-28"></div>
                    </div>
                    <div class="skeleton mt-3 h-4 w-full"></div>
                    <div class="skeleton h-4 w-full"></div>
                </div>
            </div>
        </DefaultTransition>

    </div>


</template>

<script setup lang="ts">
import DefaultTransition from '../transitions/DefaultTransition.vue';

withDefaults(defineProps<{
    inCard?: boolean;
    number?: number;
}>(), {
    inCard: false,
    number: 1
});

</script>

<style scoped></style>