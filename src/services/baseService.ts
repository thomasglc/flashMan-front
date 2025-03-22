import type { ApiResponse, SingleApiResponse } from '@/types/api';
import { httpClient } from './httpService';
import qs from 'qs';

export abstract class BaseService<T> {
    protected constructor(
        protected readonly endpoint: string
    ) { }

    async getAll(): Promise<T[]> {
        const response = await httpClient.get<ApiResponse<T>>(this.endpoint);
        return response.data.data;
    }

    async getById(id: number | string | string[], populate: string = "*"): Promise<T> {
        const query = qs.stringify({
            populate: populate
        })
        const response = await httpClient.get<SingleApiResponse<T>>(`${this.endpoint}/${id}?${query}`);
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