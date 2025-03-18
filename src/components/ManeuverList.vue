<template>
    <div class="maneuver-list">
        <h2>Liste des manœuvres</h2>

        <LoadingState v-if="loading" message="Chargement des manœuvres..." />

        <ErrorState v-else-if="error" :message="error" />

        <div v-else class="maneuvers">
            <EmptyState v-if="maneuvers.length === 0" message="Aucune manœuvre trouvée." />

            <div v-else class="maneuvers-grid">
                <ManeuverCard v-for="maneuver in maneuvers" :key="maneuver.id" :maneuver="maneuver" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { maneuverService } from '@/services/maneuverService';
import type { Maneuver } from '@/types/maneuver';
import ManeuverCard from './ManeuverCard.vue';
import LoadingState from './states/LoadingState.vue';
import ErrorState from './states/ErrorState.vue';
import EmptyState from './states/EmptyState.vue';

const maneuvers = ref<Maneuver[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchManeuvers = async () => {
    try {
        loading.value = true;
        error.value = null;
        maneuvers.value = await maneuverService.getAllManeuvers();
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Une erreur est survenue';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchManeuvers();
});
</script>

<style scoped>
.maneuver-list {
    padding: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
}

h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
}

.maneuvers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

@media (max-width: 640px) {
    .maneuvers-grid {
        grid-template-columns: 1fr;
    }
}
</style>