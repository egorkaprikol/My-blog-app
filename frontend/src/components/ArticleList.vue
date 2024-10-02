<template>
  <div class="centered-container">
    <nav>
      <router-link to="/">На главную</router-link>
    </nav>
  </div>
  <v-list lines="one">
    <div v-if="articles && articles.length">
      <v-list-item v-for="article in articles" :key="article.id">
        <v-card>
          <v-card-title>
            <router-link :to="{ name: 'ArticleView', params: { id: article.id } }">
              {{ article.title }}
            </router-link>
          </v-card-title>
          <v-card-text>{{ article.content }}</v-card-text>
        </v-card>
      </v-list-item>
    </div>
    <div v-else>
      <p>Статьи не найдены</p>
    </div>
  </v-list>
</template>

<script>
import { fetchArticles } from '@/Api/Articles';

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async loadArticles() {
      try {
        const articlesData = await fetchArticles();
        this.articles = articlesData;
      } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
      }
    }
  },
  created() {
    this.loadArticles();
  },
};
</script>