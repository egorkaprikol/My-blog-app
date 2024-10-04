<template>
  <div class="centered-container">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="dateFrom" label="Дата с" type="date" @change="loadComments"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="dateTo" label="Дата по" type="date" @change="loadComments"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-list lines="one">
      <div v-if="comments && comments.length">
        <v-list-item v-for="comment in comments" :key="comment.id">
          <router-link :to="{ name: 'CommentView', params: { articleId: comment.ArticleId, commentId: comment.id } }">
            <v-card>
              <v-card-text>{{ comment.content }}</v-card-text>
            </v-card>
          </router-link>
        </v-list-item>
      </div>
      <div v-else>
        <p>Комментарии не найдены</p>
      </div>
    </v-list>
  </div>
</template>

<script>
import { fetchCommentsByDate } from '@/Api/Analytic';

export default {
  data() {
    return {
      comments: [],
      dateFrom: '',
      dateTo: ''
    };
  },
  methods: {
    async loadComments() {
      try {
        const commentsData = await fetchCommentsByDate(this.dateFrom, this.dateTo);
        this.comments = commentsData;
      } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
      }
    },
  },
  created() {
      this.loadComments();
    }
};
</script>