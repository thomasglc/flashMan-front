<template>
    <div class="maneuver-attributes">
        <div class="attribute">
            <i class="fas fa-list"></i>
            <span class="attribute-text">{{ maneuver.maneuverCount }} manœuvrant{{ maneuver.maneuverCount > 1 ? 's' : ''
                }}</span>
        </div>
        <div class="attribute" v-if="maneuver.hasVictim">
            <i class="fas fa-user-injured"></i>
            <span class="attribute-text">{{ maneuver.victimCount }} victime{{ maneuver.victimCount > 1 ? 's' : ''
                }}</span>
        </div>
        <div class="attribute" v-if="maneuver.materiels?.length">
            <i class="fas fa-tools"></i>
            <span class="attribute-text">{{maneuver.materiels.map(m => m.name).join(', ')}}</span>
        </div>
        <div class="attribute" v-if="maneuver.theme_types?.length">
            <i class="fas fa-tag"></i>
            <span class="attribute-text">{{maneuver.theme_types.map(t => t.name).join(', ')}}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Maneuver } from '@/types/maneuver';

defineProps<{
    maneuver: Maneuver;
}>();
</script>

<style scoped>
.maneuver-attributes {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
}

.attribute {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    background-color: #dae0f4;
    border-radius: 6px;
    color: #4a5568;
    font-size: 0.9rem;
}

.attribute i {
    color: #718096;
    font-size: 0.9rem;
}

.attribute-text {
    white-space: nowrap;
}
</style>