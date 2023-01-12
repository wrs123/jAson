import { createRouter,  createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../page/start-page/index.vue')
    },
    {
      path: '/operation-board',
      component: () => import('../page/operation-board/index.vue')
    }
  ]
})

export default router;