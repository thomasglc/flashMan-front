import { defineStore } from 'pinia';
import type { ManeuverFilters } from '@/types/filters';

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        filtersComplete: false,
        currentFilters: {
            themeType: null,
            duration: null,
            peopleCount: null
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
                peopleCount: null
            };
            this.filtersComplete = false;
        }
    }
}); 