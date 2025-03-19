<template>
    <div class="selected-filters">
        <div v-if="filters.themeType" class="filter-item">
            <span class="label">Type :</span>
            <span class="value">{{ filters.themeType }}</span>
        </div>
        <div v-if="filters.duration" class="filter-item">
            <span class="label">Durée :</span>
            <span class="value">{{ filters.duration }} minutes</span>
        </div>
        <div v-if="filters.people" class="filter-item">
            <span class="label">Personnes :</span>
            <span class="value">{{ filters.people }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ManeuverFilters } from '@/types/filters';

defineProps<{
    filters: ManeuverFilters;
}>();
</script>

<style scoped>
.selected-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
}

.filter-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.9rem;
}

.label {
    color: #718096;
    font-weight: 500;
}

.value {
    color: #2d3748;
    font-weight: 600;
}
</style>