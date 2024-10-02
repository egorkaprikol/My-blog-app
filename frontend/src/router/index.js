import { createRouter, createWebHistory } from 'vue-router'

import ArticleList from '@/components/ArticleList.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import HomePage from '@/components/HomePage.vue'
import ArticleView from '@/components/ArticleView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/article', component: ArticleList },
  { path: '/article/:id/new', component: ArticleForm },
  { path: '/article/:id', name: 'ArticleView', component: ArticleView, props: true }
]

const BaseRouter = createRouter({
  history: createWebHistory(),
  routes,
})

export default BaseRouter