<template>
    <div class="maneuver-detail">
        <div v-if="loading" class="loading">
            <LoadingState message="Chargement de la manœuvre..." />
        </div>

        <div v-else-if="error" class="error">
            <ErrorState :message="error" />
        </div>

        <div v-else-if="maneuver" class="content">
            <div class="header">
                <button class="back-button" @click="router.back()">
                    <i class="fas fa-arrow-left"></i>
                    Retour
                </button>
                <h1>{{ maneuver.title }}</h1>
            </div>

            <div class="info-section">
                <p class="description">{{ maneuver.description }}</p>

                <div class="stats">
                    <div class="stat-item">
                        <i class="fas fa-list"></i>
                        <span>{{ maneuver.maneuverCount }} manœuvre(s)</span>
                    </div>
                    <div v-if="maneuver.hasVictim" class="stat-item">
                        <i class="fas fa-user-injured"></i>
                        <span>{{ maneuver.victimCount }} victime(s)</span>
                    </div>
                </div>
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

const router = useRouter();
const route = useRoute();
const maneuver = ref<Maneuver | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

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
        maneuver.value = await maneuverService.getManeuverById(id);
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
.maneuver-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.header {
    margin-bottom: 2rem;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    color: #4a5568;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 1rem;
}

.back-button:hover {
    background-color: #edf2f7;
    color: #2d3748;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
}

.info-section {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.description {
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 2rem 0;
}

.stats {
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    font-size: 1rem;
}

.stat-item i {
    color: #718096;
}
</style>