<template>
    <div class="maneuver-attributes">
        <div>
            <Badge icon="fa-users-gear" size="badge-md">
                {{ maneuver.maneuverCount }} manœuvrant{{ maneuver.maneuverCount > 1 ? 's' : '' }}
            </Badge>
        </div>
        <div v-if="maneuver.hasVictim">
            <Badge icon="fa-user-injured" size="badge-md">
                {{ maneuver.victimCount }} victime{{ maneuver.victimCount > 1 ? 's' : '' }}
            </Badge>
        </div>
        <div v-if="maneuver.materiels?.length">
            <Badge icon="fa-tools" size="badge-md">
                {{maneuver.materiels.map(m => m.name).join(' / ')}}
            </Badge>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Maneuver } from '@/types/maneuver';
import Badge from './utils/Badge.vue';

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