import { createRouter, createWebHistory } from 'vue-router'
import clientList from '@/components/clientList..vue'
import clientList2 from '@/components/clientList2.vue'
import inicioComponent from '/home/pedro/pruebas/daw2_23_24/prueba_tanstackQuery/src/components/inicioComponent.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'inicio',
      component:inicioComponent,

    },
    {
      path:'/lista1',
      name:'lista1',
      component:clientList,

    },
    {
      path:'/lista2',
      name:'lista2',
      component:clientList2,
    }

    
  ]
})

export default router
