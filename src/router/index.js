import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: "/Painel",
    name: "Painel",
    component: () => import("../views/DashboardRefriango copy.vue"),
  },
  {
    path: "/produtos",
    name: "produtos",
    component: () => import("../views/ProdutosReriango.vue"),
  },
  {
    path: "/estoque",
    name: "estoque",
    component: () => import("../views/EstoqueRefriango.vue"),
  },
  {
    path: "/fornecedores",
    name: "fornecedores",
    component: () => import("../views/FornecedoresRefriango.vue"),
  },
  {
    path: "/relatorios",
    name: "relatorios",
    component: () => import("../views/RelatoriosRefriango.vue"),
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: () => import("../views/UsuariosRefriango.vue"),
  },
  {
    path: "/configuracao",
    name: "configuracao",
    component: () => import("../views/ConfiguracaoRefriango.vue"),
  },
  {
    path: "/administrador",
    name: "administrador",
    component: () => import("../views/AdminRefriango.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
