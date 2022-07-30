import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBeats from '../views/AllBeats.vue'
import Serviços from '../views/Serviços.vue'
import AddBeat from '../views/AddBeat'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allbeats',
    name: 'allbeats',
    component: AllBeats
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: Serviços
  }, 
  {
    path: '/addbeat',
    name: 'AddBeat',
    component: AddBeat
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
