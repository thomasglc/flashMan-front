export type Duration = 5 | 10 | 20 | 30;

export interface ManeuverFilters {
    themeType: string | null;
    duration: Duration | null;
    people: number | null;
}

export interface FilterQuestion {
    id: string;
    question: string;
    currentStep: number;
} 