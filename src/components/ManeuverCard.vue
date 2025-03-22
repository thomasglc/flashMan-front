<template>
    <div class="maneuver-card card bg-base-200 shadow-md m-8" @click="navigateToDetail" role="button" tabindex="0"
        @keyup.enter="navigateToDetail">

        <div class="card-body">
            <h2 class="card-title">
                {{ maneuver.title }}
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p v-if="maneuver.description">{{ maneuver.description }}</p>
            <div class="card-actions justify-end">
                <ManeuverAttributes :maneuver="maneuver" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Maneuver } from '@/types/maneuver';
import { useRouter } from 'vue-router';
import ManeuverAttributes from './ManeuverAttributes.vue';

const router = useRouter();
const props = defineProps<{
    maneuver: Maneuver;
}>();

const navigateToDetail = () => {
    router.push(`/maneuvers/${props.maneuver.documentId}`);
};
</script>

<style scoped>
.maneuver-card {
    cursor: pointer;
    transition: all 0.3s;
    animation: fade 0.5s;
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

.maneuver-card:hover,
.maneuver-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>