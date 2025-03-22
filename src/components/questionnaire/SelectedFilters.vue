<template>
    <div v-if="filters" class="flex justify-evenly">
        <Badge :badge="icon" :color="color">{{ filters.themeType }}</Badge>
        <Badge badge="fa-clock">{{ filters.duration }} minutes</Badge>
        <Badge badge="fa-people-group">{{ filters.people }} personne{{ filters.people > 1 ? 's' : '' }}</Badge>
    </div>
</template>

<script setup lang="ts">
import type { ManeuverFilters } from '@/types/filters';
import Badge from '../utils/Badge.vue';
import { ThemeTypes } from '@/enums/themeTypes';

const props = defineProps<{
    filters: ManeuverFilters;
}>();

const themeMapping = {
    [ThemeTypes.INC]: { icon: "fa-fire", color: "error" },
    [ThemeTypes.DIV]: { icon: "fa-hammer", color: "info" },
    [ThemeTypes.SAP]: { icon: "fa-truck-medical", color: "success" }
};
const { icon, color } = themeMapping[props.filters.themeType];
</script>
