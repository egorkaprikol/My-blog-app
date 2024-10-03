<template>
  <div class="centered-container">
    <nav>
      <router-link to="/article">Список статей</router-link>
    </nav>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.content }}</v-card-text>
          <v-btn @click="viewComments">Комментарии</v-btn>
          <v-btn color="primary" @click="editArticle">Редактировать</v-btn>
          <v-btn color="error" @click="deleteArticle">Удалить</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchArticle, deleteArticleById } from '@/Api/Articles';

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
      } catch (error) {
        console.error('Ошибка при загрузке статьи:', error);
      }
    },
    viewComments() {
      this.$router.push({ name: 'CommentList', params: { articleId: this.id } });
    },
    editArticle() {
      this.$router.push({ name: 'ArticleEdit', params: { id: this.id } });
    },
    async deleteArticle() {
      if (confirm('Вы уверены, что хотите удалить эту статью?')) {
        try {
          await deleteArticleById(this.id);
          alert('Статья успешно удалена!');
          this.$router.push({ name: 'ArticleList' });
        } catch (error) {
          console.error('Ошибка при удалении статьи:', error);
        }
      }
    },
  },
  created() {
    this.loadArticle();
  },
};
</script>