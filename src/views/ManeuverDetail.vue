<template>
    <div class="max-width">
        <SelectedFilters :filters="filtersStore.currentFilters"></SelectedFilters>
        <div class="maneuver-detail">
            <div v-if="loading">
                <LoadingState />
            </div>

            <div v-else-if="error">
                <ErrorState :message="error" />
            </div>

            <div v-else-if="maneuver">
                <PreviousButton @click="router.back()"></PreviousButton>
                <h1>{{ maneuver.title }}</h1>
                <ManeuverAttributes :maneuver="maneuver" />
                <p class="description">{{ maneuver.description }}</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { maneuverService } from '@/services/maneuverService';
import type { Maneuver } from '@/types/maneuver';
import LoadingState from '@/components/states/LoadingState.vue';
import ErrorState from '@/components/states/ErrorState.vue';
import PreviousButton from '@/components/utils/PreviousButton.vue';
import ManeuverAttributes from '@/components/ManeuverAttributes.vue';
import SelectedFilters from '@/components/questionnaire/SelectedFilters.vue';
import { useFiltersStore } from '@/stores/filtersStore';

const router = useRouter();
const route = useRoute();
const maneuver = ref<Maneuver | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const filtersStore = useFiltersStore();

const fetchManeuver = async () => {
    const id = route.params.id;
    if (!id) {
        error.value = 'ID de manœuvre invalide';
        loading.value = false;
        return;
    }

    try {
        loading.value = true;
        error.value = null;
        maneuver.value = await maneuverService.getById(id);
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Une erreur est survenue';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchManeuver();
});
</script>

<style scoped>
.max-width {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
}


.maneuver-detail {
    padding: 2rem;
}

.description {
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>