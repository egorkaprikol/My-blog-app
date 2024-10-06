<template>
  <v-btn color="primary" @click="createNewArticle">Создать новую статью</v-btn>
  <v-list lines="one">
    <div v-if="articles && articles.length">
      <v-list-item v-for="article in articles" :key="article.id">
        <v-card class="border">
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
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      articles: (state) => state.articles
    }),
  },
  methods: {
    ...mapActions(['fetchArticles']),
    createNewArticle() {
      this.$router.push({ name: 'ArticleCreate' });
    }
  },
  created() {
    this.fetchArticles();
  },
};
</script>