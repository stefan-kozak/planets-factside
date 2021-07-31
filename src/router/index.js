import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/mercury',
      name: 'Mercury',
      // route level code-splitting
      // this generates a separate chunk (Mercury.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Mercury" */ '../views/Mercury.vue'),
   },
   {
      path: '/venus',
      name: 'Venus',
      // route level code-splitting
      // this generates a separate chunk (Venus.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Venus" */ '../views/Venus.vue'),
   },
   {
      path: '/earth',
      name: 'Earth',
      // route level code-splitting
      // this generates a separate chunk (Earth.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Earth" */ '../views/Earth.vue'),
   },
   {
      path: '/mars',
      name: 'Mars',
      // route level code-splitting
      // this generates a separate chunk (Mars.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Mars" */ '../views/Mars.vue'),
   },
   {
      path: '/jupiter',
      name: 'Jupiter',
      // route level code-splitting
      // this generates a separate chunk (Jupiter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Jupiter" */ '../views/Jupiter.vue'),
   },
   {
      path: '/saturn',
      name: 'Saturn',
      // route level code-splitting
      // this generates a separate chunk (Saturn.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Saturn" */ '../views/Saturn.vue'),
   },
   {
      path: '/uranus',
      name: 'Uranus',
      // route level code-splitting
      // this generates a separate chunk (Uranus.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Uranus" */ '../views/Uranus.vue'),
   },
   {
      path: '/neptune',
      name: 'Neptune',
      // route level code-splitting
      // this generates a separate chunk (Neptune.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "Neptune" */ '../views/Neptune.vue'),
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

export default router
