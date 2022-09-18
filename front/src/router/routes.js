import Student from "pages/Student";
import Login from "pages/Login";
import Listado from "pages/Listado";

const routes = [
  {
    path: '/login',
    //component: () => import('layouts/MainLayout.vue'),
    //children: [
      //{ path: '', component: () => import('pages/IndexPage.vue') }
    component: () => Login,
    //]
  },
  {
    path: '/',
    component: () => Student,
  },
  {
    path: '/listado',component: Listado,meta: {requiresAuth: true},
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
