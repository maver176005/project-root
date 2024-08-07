import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Stores from '../views/Stores.vue';
import Cars from '../views/Cars.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/stores', name: 'Stores', component: Stores },
    { path: '/cars', name: 'Cars', component: Cars },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
