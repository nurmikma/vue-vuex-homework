import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from '@/views/SignupView.vue'
import PostsView from '@/views/PostsView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: PostsView
},
{
    path: '/signup',
    name: 'sign',
    component: SignupView
}
]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router