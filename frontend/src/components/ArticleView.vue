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
import { fetchArticle } from '@/Api/Articles';

export default {
  props: ['id'],
  data() {
    return {
      article: {},
    };
  },
  methods: {
    async loadArticle() {
      try {
        const articleData = await fetchArticle(this.id);
        this.article = articleData;
      }
      catch (error) {
        console.error('Ошибка при загрузке статьи:', error); 
    }
    }
  },
  created() {
    this.loadArticle();
  },
};
</script>