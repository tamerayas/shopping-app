import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/ProductList.vue';
import MyCart from '@/views/MyCart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: () => {
      return { path: '/product-list' };
    }
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/my-cart',
    name: 'MyCart',
    component: MyCart
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
