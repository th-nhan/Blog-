import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NewPost from '@/views/NewPost.vue'
import PostDetail from '@/views/PostDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/post/:id', component: PostDetail },
  { 
    path: '/new-post', 
    component: NewPost, 
    meta: { requiresAuth: true } // Chỉ user đăng nhập mới truy cập
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard: Chặn truy cập nếu chưa đăng nhập
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
