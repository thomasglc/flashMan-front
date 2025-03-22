<template>
    <div class="maneuver-list">
        <ManeuverQuestionnaire v-if="!filtersStore.filtersComplete" @complete="handleFiltersComplete" />

        <div v-else>

            <div class="header">
                <SelectedFilters :filters="filtersStore.currentFilters" />
            </div>
            <ResetQuestionnaireButton @reset="resetQuestionnaire" />

            <div v-if="loading" class="loading">
                <LoadingState message="Chargement des manœuvres..." />
            </div>

            <div v-else-if="error" class="error">
                <ErrorState :message="error" />
            </div>

            <div v-else class="xl:flex">
                <ManeuverCard v-for="maneuver in maneuvers" :key="maneuver.id" :maneuver="maneuver" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { maneuverService } from '@/services/maneuverService';
import type { Maneuver } from '@/types/maneuver';
import type { ManeuverFilters } from '@/types/filters';
import ManeuverCard from './ManeuverCard.vue';
import ManeuverQuestionnaire from './ManeuverQuestionnaire.vue';
import LoadingState from './states/LoadingState.vue';
import ErrorState from './states/ErrorState.vue';
import ResetQuestionnaireButton from './ResetQuestionnaireButton.vue';
import { useFiltersStore } from '@/stores/filtersStore';
import SelectedFilters from './questionnaire/SelectedFilters.vue';

const maneuvers = ref<Maneuver[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const filtersStore = useFiltersStore();

const fetchManeuvers = async () => {
    try {
        loading.value = true;
        error.value = null;
        maneuvers.value = await maneuverService.getAll(filtersStore.currentFilters);
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Une erreur est survenue';
    } finally {
        loading.value = false;
    }
};

const handleFiltersComplete = (filters: ManeuverFilters) => {
    filtersStore.setFilters(filters);
    fetchManeuvers();
};

const resetQuestionnaire = () => {
    filtersStore.resetFilters();
    maneuvers.value = [];
};

onMounted(() => {
    if (filtersStore.filtersComplete) {
        fetchManeuvers();
    }
});
</script>

<style scoped>
.header {
    animation: fade 0.9s;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
}


.maneuver-list {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
}

.maneuvers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.loading,
.error {
    text-align: center;
    margin-top: 2rem;
}
</style>