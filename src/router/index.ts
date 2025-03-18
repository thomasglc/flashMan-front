import { createRouter, createWebHistory } from 'vue-router';
import ManeuverList from '@/components/ManeuverList.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ManeuverList
        },
        {
            path: '/maneuvers/:id',
            name: 'maneuver-detail',
            component: () => import('@/views/ManeuverDetail.vue')
        }
    ]
});

export default router; 