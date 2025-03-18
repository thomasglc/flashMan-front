import axios from 'axios';
import type { Maneuver } from '@/types/maneuver';
import type { ApiResponse, SingleApiResponse } from '@/types/api';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Configuration d'axios avec le token d'authentification
const axiosInstance = axios.create({
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  }
});

export const maneuverService = {
  // Récupérer toutes les manœuvres
  async getAllManeuvers(): Promise<Maneuver[]> {
    const response = await axiosInstance.get<ApiResponse<Maneuver>>(`${API_URL}/maneuvers?populate=theme_types&populate=materiels`);
    return response.data.data;
  },

  // Récupérer une manœuvre par son ID
  async getManeuverById(documentId: string): Promise<Maneuver> {
    const response = await axiosInstance.get<SingleApiResponse<Maneuver>>(`${API_URL}/maneuvers/${documentId}?populate=*`);
    return response.data.data;
  },

  // Créer une nouvelle manœuvre
  async createManeuver(maneuver: Omit<Maneuver, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'>): Promise<Maneuver> {
    const response = await axiosInstance.post<SingleApiResponse<Maneuver>>(`${API_URL}/maneuvers`, {
      data: maneuver
    });
    return response.data.data;
  },

  // Mettre à jour une manœuvre
  async updateManeuver(id: number, maneuver: Partial<Omit<Maneuver, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'>>): Promise<Maneuver> {
    const response = await axiosInstance.put<SingleApiResponse<Maneuver>>(`${API_URL}/maneuvers/${id}`, {
      data: maneuver
    });
    return response.data.data;
  },

  // Supprimer une manœuvre
  async deleteManeuver(id: number): Promise<void> {
    await axiosInstance.delete(`${API_URL}/maneuvers/${id}`);
  }
};