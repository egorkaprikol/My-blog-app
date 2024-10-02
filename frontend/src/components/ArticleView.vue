<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.content }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      article: {},
    };
  },
  methods: {
    async fetchArticle() {
      try {
        const response = await axios.get(`http://localhost:3001/article/${this.id}`);
        this.article = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке статьи:', error);
      }
    },
  },
  created() {
    this.fetchArticle();
  },
};
</script>