
export interface ManeuverFilters {
    themeType: string | null;
    duration: number | null;
    people: number | null;
}

export interface FilterQuestion {
    id: string;
    question: string;
    currentStep: number;
} 