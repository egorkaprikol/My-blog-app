<template>
  <v-list lines="one">
    <div v-if="articles.length">
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
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('http://localhost:3001/article');
        this.articles = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
      }
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>