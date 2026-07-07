import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import HeroStatsView from "@/views/HeroStatsView.vue";
import MainStatsView from "@/views/MainStatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Deadstat' } },
    { path: '/player-stats', component: HeroStatsView, meta: { title: 'Hero stats' } },
    { path: '/main-stats',  component: MainStatsView, meta: { title: 'MainStats' } },
  ],
})

export default router
