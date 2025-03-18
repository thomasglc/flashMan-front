<template>
    <div class="maneuver-card" @click="navigateToDetail" role="button" tabindex="0" @keyup.enter="navigateToDetail">
        <div class="maneuver-content">
            <h3>{{ maneuver.title }}</h3>
            <p v-if="maneuver.description" class="description">{{ maneuver.description }}</p>
        </div>
        <ManeuverAttributes :maneuver="maneuver" />
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
    padding: 1.25rem;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    outline: none;
}

.maneuver-card:hover,
.maneuver-card:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

.maneuver-card:focus {
    border-color: #4299e1;
}

.maneuver-content {
    flex-grow: 1;
}

h3 {
    margin: 0 0 0.75rem 0;
    color: #2d3748;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
}

.description {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>