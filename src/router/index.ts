import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, meta: { title: 'Deadstat' } },
  ],
})

export default router
