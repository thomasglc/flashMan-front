import type { Maneuver } from '@/types/maneuver';
import type { ApiResponse, SingleApiResponse } from '@/types/api';
import { httpClient } from './httpService';
import { BaseService } from './baseService';

class ManeuverService extends BaseService<Maneuver> {
  constructor() {
    super('/maneuvers');
  }
}

export const maneuverService = new ManeuverService();