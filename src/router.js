import { createRouter, createWebHistory } from 'vue-router'
import Formulario from './views/Formulario.vue'
import Usuarios from './views/Usuarios.vue'

const routes = [
  { path: '/', component: Formulario },
  { path: '/usuarios', component: Usuarios }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
