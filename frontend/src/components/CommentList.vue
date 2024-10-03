<template>
  <div class="centered-container">
    <nav>
      <router-link :to="{ name: 'ArticleView', params: { id: articleId } }">
        Назад к статье
      </router-link>
    </nav>
  </div>
  <v-btn color="primary" @click="addNewComment">Добавить комментарий</v-btn>
  <v-list lines="one">
    <div v-if="comments && comments.length">
      <v-list-item v-for="comment in comments" :key="comment.id">
        <router-link :to="{ name: 'CommentView', params: { articleId: articleId, commentId: comment.id } }">
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
</template>

<script>
import { fetchComments } from '@/Api/Comments';

export default {
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    async loadComments() {
      try {
        const commentsData = await fetchComments(this.articleId);
        this.comments = commentsData;
      } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
      }
    },
    addNewComment() {
      this.$router.push({ name: 'CommentCreate', params: { articleId: this.articleId } });
    },
  },
  created() {
    this.loadComments();
  },
};
</script>
