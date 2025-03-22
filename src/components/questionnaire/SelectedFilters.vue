<template>
    <div v-if="filters" class="flex justify-evenly">
        <Badge :icon="icon" :badge-class="color">{{ filters.themeType }}</Badge>
        <Badge icon="fa-clock">{{ filters.duration }} minutes</Badge>
        <Badge icon="fa-people-group">{{ filters.people }} personne{{ filters.people > 1 ? 's' : '' }}</Badge>
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
    [ThemeTypes.INC]: { icon: "fa-fire", badgeClass: "badge-error" },
    [ThemeTypes.DIV]: { icon: "fa-hammer", badgeClass: "badge-info" },
    [ThemeTypes.SAP]: { icon: "fa-truck-medical", badgeClass: "badge-success" }
};
const themeType = props.filters.themeType;
const { icon, badgeClass: color } = themeType ? themeMapping[themeType] : { icon: '', badgeClass: '' };
</script>
