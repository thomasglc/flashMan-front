import { defineStore } from 'pinia';
import type { ManeuverFilters } from '@/types/filters';

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        filtersComplete: false,
        currentFilters: {
            themeType: null,
            duration: null,
            people: 0
        } as ManeuverFilters
    }),
    actions: {
        setFilters(filters: ManeuverFilters) {
            this.currentFilters = filters;
            this.filtersComplete = true;
        },
        resetFilters() {
            this.currentFilters = {
                themeType: null,
                duration: null,
                people: 0
            };
            this.filtersComplete = false;
        }
    }
}); 