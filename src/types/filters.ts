import type { ThemeTypes } from "@/enums/themeTypes";

export interface ManeuverFilters {
    themeType: ThemeTypes | null;
    duration: number | null;
    people: number;
}

export interface FilterQuestion {
    id: string;
    question: string;
    currentStep: number;
} 