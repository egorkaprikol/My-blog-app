import { createRouter, createWebHistory } from 'vue-router'

import ArticleList from '@/components/ArticleList.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import HomePage from '@/components/HomePage.vue'
import ArticleView from '@/components/ArticleView.vue'
import CommentList from '@/components/CommentList.vue'
import CommentForm from '@/components/CommentForm.vue'
import CommentView from '@/components/CommentView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/article', name: 'ArticleList', component: ArticleList },
  { path: '/article/:id/edit', name: 'ArticleEdit', component: ArticleForm, props: true },
  { path: '/article/create', name: 'ArticleCreate', component: ArticleForm },
  { path: '/article/:id', name: 'ArticleView', component: ArticleView, props: true },
  { path: '/article/:articleId/comment', name: 'CommentList', component: CommentList, props: true },
  { path: '/article/:articleId/comment/create', name: 'CommentCreate', component: CommentForm, props: true },
  { path: '/article/:articleId/comment/:commentId/edit', name: 'CommentEdit', component: CommentForm, props: true },
  { path: '/article/:articleId/comment/:commentId', name: 'CommentView', component: CommentView, props: true }
]

const BaseRouter = createRouter({
  history: createWebHistory(),
  routes,
})

export default BaseRouter