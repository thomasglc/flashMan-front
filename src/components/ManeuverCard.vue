<template>
    <div class="maneuver-card card bg-base-300 shadow-md m-8 xl:h-60 xl:w-1/2" @click="navigateToDetail" role="button"
        tabindex="0" @keyup.enter="navigateToDetail">

        <div class="card-body">
            <h2 class="card-title">
                {{ maneuver.title }}
            </h2>
            <p v-if="truncatedDescription">{{ truncatedDescription }}</p>
            <ManeuverAttributes :maneuver="maneuver" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Maneuver } from '@/types/maneuver';
import { useRouter } from 'vue-router';
import ManeuverAttributes from './ManeuverAttributes.vue';
import { computed } from 'vue';
import { extractTextFromDescription } from '@/utils/extractwysiwyg';

const router = useRouter();
const props = defineProps<{
    maneuver: Maneuver;
}>();

const navigateToDetail = () => {
    router.push(`/maneuvers/${props.maneuver.documentId}`);
};

const truncatedDescription = computed(() => {
    if (props.maneuver.description) {
        let desc = extractTextFromDescription(props.maneuver.description);
        return desc.length > 100
            ? desc.substring(0, 200) + "..."
            : desc;
    }
    return '';
});
</script>

<style scoped>
.maneuver-card {
    cursor: pointer;
    transition: all 0.3s;
    /*animation: fade 0.5s; */
}

/*
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
} */

.maneuver-card:hover,
.maneuver-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>