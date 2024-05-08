// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import ShopDetails from '../views/ShopDetails.vue';
import Home from '../views/Home.vue';

const routes = [
    { 
        path: '/shop-details/:id', 
        name: 'ShopDetails',
        component: ShopDetails,
        props: true
    },
    { 
        path: '/', 
        name: 'Home',
        component: Home 
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

