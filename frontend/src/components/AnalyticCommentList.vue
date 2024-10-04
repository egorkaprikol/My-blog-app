<template>
  <div class="centered-container">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="dateFrom" label="Дата с" type="date" @change="loadComments"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="dateTo" label="Дата по" type="date" @change="loadComments"></v-text-field>
        </v-col>
        <v-col>
          <v-btn @click.prevent="resetFilters">Reset</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-data-table :items="comments" :headers="headers" :items-per-page="15">
    </v-data-table>
  </div>
</template>

<script>
import { fetchCommentsByDate } from '@/api/analytic';

export default {
  data() {
    return {
      comments: [],
      dateFrom: '',
      dateTo: '',
      headers: [
        { key: 'id', title: 'ID' },
        { key: 'ArticleId', title: 'Article ID' },
        { key: 'content', title: 'Content' },
        { key: 'updatedAt', title: 'Updated At' },
        { key: 'createdAt', title: 'Created At' },
      ],
    };
  },
  methods: {
    resetFilters() {
      this.dateFrom = '';
      this.dateTo = '';
      this.loadComments();
    },

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