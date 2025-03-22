import type { Maneuver } from '@/types/maneuver';
import type { ApiResponse, SingleApiResponse } from '@/types/api';
import type { ManeuverFilters } from '@/types/filters';
import { httpClient } from './httpService';
import { BaseService } from './baseService';
import qs from 'qs';

class ManeuverService extends BaseService<Maneuver> {
  constructor() {
    super('/maneuvers');
  }

  async getAll(filters?: ManeuverFilters): Promise<Maneuver[]> {
    const query = qs.stringify({
      filters: {
        theme_types: filters?.themeType ? { name: { $eq: filters.themeType } } : undefined,
        duration: filters?.duration ? { $eq: filters.duration } : undefined,
        people: filters?.people ? { $eq: filters.people } : undefined,
      },
      populate: '*'
    }, {
      encodeValuesOnly: true,
      skipNulls: true
    });

    const response = await httpClient.get<ApiResponse<Maneuver>>(`${this.endpoint}?${query}`);
    return response.data.data;
  }
}

export const maneuverService = new ManeuverService();