import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/singleSelect.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/single-object',
    name: 'singleObject',
    component: () => import('../components/singleObject.vue'),
  },
  {
    path: '/select-with-search',
    name: 'selectWithSearch',
    component: () => import('../components/selectWithSearch.vue'),
  },
  {
    path: '/multiple-select',
    name: 'multipleSelect',
    component: () => import('../components/multipleSelect.vue'),
  },
  // {
  //   path: '/asynchronous-select',
  //   name: 'asynchronousSelect',
  //   component: () => import('../components/asynchronousSelect.vue'),
  // },
  {
    path: '/tagging',
    name: 'tagging',
    component: () => import('../components/tagging.vue'),
  },
  {
    path: '/custom-option',
    name: 'customOption',
    component: () => import('../components/customOption.vue'),
  },
  {
    path: '/option-groups',
    name: 'optionGroups',
    component: () => import('../components/optionGroups.vue'),
  },
  {
    path: '/action-dispatcher',
    name: 'actionDispatcher',
    component: () => import('../components/actionDispatcher.vue'),
  },
  {
    path: '/custom-config',
    name: 'customConfig',
    component: () => import('../components/customConfig.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
