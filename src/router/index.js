import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from '@/views/SignupView.vue'
import PostsView from '@/views/PostsView.vue'
import LoginView from '@/views/LoginView.vue'
import AddPostView from '@/views/AddPostView.vue';
import auth from '@/auth'

const routes = [{
    path: '/',
    name: 'home',
    component: PostsView,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('login')
        } else {
            next();
        }
    }
},
{
    path: '/signup',
    name: 'sign',
    component: SignupView
},
{
    path: '/login',
    name: 'log',
    component: LoginView
},
{ 
    path: '/posts', 
    name: 'PostsView', 
    component: PostsView 
},
{ 
    path: '/add-post', 
    name: 'AddPostView', 
    component: AddPostView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router