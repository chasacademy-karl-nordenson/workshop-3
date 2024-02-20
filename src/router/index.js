import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MoviesList from '@/views/MoviesList.vue';
import MovieDetails from '@/views/MovieDetails.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/movies', component: MoviesList },
  { path: '/movies/:id', component: MovieDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;