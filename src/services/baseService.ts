import type { ApiResponse, SingleApiResponse } from '@/types/api';
import { httpClient } from './httpService';

export abstract class BaseService<T> {
    protected constructor(
        protected readonly endpoint: string
    ) { }

    async getAll(): Promise<T[]> {
        const response = await httpClient.get<ApiResponse<T>>(this.endpoint);
        return response.data.data;
    }

    async getById(id: number): Promise<T> {
        const response = await httpClient.get<SingleApiResponse<T>>(`${this.endpoint}/${id}`);
        return response.data.data;
    }

    async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'>): Promise<T> {
        const response = await httpClient.post<SingleApiResponse<T>>(this.endpoint, {
            data
        });
        return response.data.data;
    }

    async update(id: number, data: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'>>): Promise<T> {
        const response = await httpClient.put<SingleApiResponse<T>>(`${this.endpoint}/${id}`, {
            data
        });
        return response.data.data;
    }

    async delete(id: number): Promise<void> {
        await httpClient.delete(`${this.endpoint}/${id}`);
    }
} 