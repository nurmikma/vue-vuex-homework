import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from '@/views/SignupView.vue'
import PostsView from '@/views/PostsView.vue'
import LoginView from '@/views/LoginView.vue'
import AddPostView from '@/views/AddPostView.vue';
import PostUpdateView from '@/views/PostUpdateView.vue';
import auth from '@/auth'
import ContactsView from '@/views/ContactsView.vue';

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
    path: '/contact',
    name: 'ContactsView',
    component: ContactsView
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
    path: '/add-post', 
    name: 'AddPostView', 
    component: AddPostView,
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
    path: '/posts/:id',
    name: 'PostUpdate',
    component: PostUpdateView,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('login')
        } else {
            next();
        }
    }
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router