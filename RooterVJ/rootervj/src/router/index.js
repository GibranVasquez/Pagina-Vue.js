import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'    // ✅ Ruta corregida
import About from '../pages/About.vue'  // ✅ Ruta corregida
import Horario from '../pages/Horario.vue'  // ✅ Ruta corregida
import Recorrido1 from '../pages/Recorrido/Recorrido1.vue'
import Eventos1 from '../pages/Eventos/Eventos1.vue'
import Papa from '../pages/Props/Papa.vue'


const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about', 
    component: About 
  },
  {
    path: '/horario',
    name: 'horario',            
    component: Horario
  },
  {
    path: '/recorrido1',
    name: 'recorrido1',
    component: Recorrido1
  },
  {
    path: '/eventos1',
    name: 'eventos1',
    component: Eventos1
  },
  {
    path: '/papa',
    name: 'papa',
    component: Papa
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router