import { createRouter, createWebHistory } from 'vue-router'

import ArticleList from '@/components/ArticleList.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import HomePage from '@/components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/article', component: ArticleList },
  { path: '/article/:id', component: ArticleForm }
]

const BaseRouter = createRouter({
  history: createWebHistory(),
  routes,
})

export default BaseRouter