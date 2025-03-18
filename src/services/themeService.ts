import type { ThemeType } from '@/types/theme';
import { BaseService } from './baseService';

class ThemeService extends BaseService<ThemeType> {
    constructor() {
        super('/theme-types');
    }
}

export const themeService = new ThemeService(); 