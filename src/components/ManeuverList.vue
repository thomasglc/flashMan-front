<template>
    <div class="maneuver-list">
        <ManeuverQuestionnaire v-if="!filtersStore.filtersComplete" @complete="handleFiltersComplete" />

        <div v-else>
            <div class="header">
                <SelectedFilters :filters="filtersStore.currentFilters" />
            </div>
            <ResetQuestionnaireButton @reset="resetQuestionnaire" />

            <div v-if="loading">
                <CardLoadingState :number="2" />
            </div>

            <div v-else-if="error" class="error">
                <ErrorState :message="error" />
            </div>
            <div v-else-if="hasManeuvers" class="xl:flex">
                <ManeuverCard v-for="maneuver in maneuvers" :key="maneuver.id" :maneuver="maneuver" />

            </div>
            <div v-else-if="!hasManeuvers" class="flex justify-center py-12 m-5 ">
                <div class="alert alert-warning alert-soft pt-5 pb-5">
                    <div class="flex   ">
                        <div class=" basis-1/4 flex justify-center items-center">
                            <i class="fa fa-warning text-2xl"></i>
                        </div>
                        <div class="basis-3/4">
                            <h3 class="font-bold">Aucune manœuvre trouvée</h3>
                            <p>Aucune manœuvre ne correspond aux critères sélectionnés.</p>
                            <p>Essayez de modifier vos filtres.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { maneuverService } from '@/services/maneuverService';
import { useFiltersStore } from '@/stores/filtersStore';
import type { ManeuverFilters } from '@/types/filters';
import type { Maneuver } from '@/types/maneuver';
import { computed, onMounted, ref } from 'vue';
import ManeuverCard from './ManeuverCard.vue';
import ManeuverQuestionnaire from './ManeuverQuestionnaire.vue';
import SelectedFilters from './questionnaire/SelectedFilters.vue';
import ResetQuestionnaireButton from './ResetQuestionnaireButton.vue';
import CardLoadingState from './states/CardLoadingState.vue';
import ErrorState from './states/ErrorState.vue';

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

const hasManeuvers = computed(() => {
    return maneuvers.value.length === 0 ? false : true
});

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
/* .header {
    animation: fade 0.9s;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
} */


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

.error {
    text-align: center;
    margin-top: 2rem;
}
</style>