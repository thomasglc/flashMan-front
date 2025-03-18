interface Material {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface ThemeType {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Maneuver {
    id: number;
    documentId: string;
    title: string;
    description: string;
    maneuverCount: number;
    hasVictim: boolean;
    victimCount: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    materiels: Material[];
    theme_types: ThemeType[];
} 