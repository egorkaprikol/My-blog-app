<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="comment in comments" :key="comment.id" class="d-flex justify-space-between">
            <v-card class="w-100">
              <v-card-title>
                <div class="d-flex justify-space-between w-100">
                  <span>{{ comment.author }}</span>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="editComment(comment)">
                        <v-list-item-title>Редактировать</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="deleteComment(comment.id)">
                        <v-list-item-title>Удалить</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-card-title>
              <v-card-text>{{ comment.content }}</v-card-text>
            </v-card>
          </v-list-item>
        </v-list>

        <v-alert v-if="comments.length === 0" type="info">Комментариев нет</v-alert>
      </v-col>
    </v-row>

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Редактировать комментарий</span>
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="editedComment.content" label="Комментарий" rows="4"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="updateComment">Сохранить</v-btn>
          <v-btn text @click="closeEditDialog">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { fetchComments } from '@/Api/Comments';

export default {
  data() {
    return {
      comments: [],
      editDialog: false,
      editedComment: { id: null, content: '' },
      articleId: null,
    };
  },
  methods: {
    async loadComments() {
    try {
      this.articleId = this.$route.params.articleId;
      const response = await fetchComments(this.articleId);
      // Проверьте, что response.data действительно существует и является массивом
      if (Array.isArray(response)) {
        this.comments = response; // Присваиваем массив комментариев
      } else {
        console.error('Некорректный формат данных:', response);
        this.comments = []; // Устанавливаем пустой массив при ошибке
      }
    } catch (error) {
      console.error('Ошибка при загрузке комментариев:', error);
      this.comments = []; // Устанавливаем пустой массив при ошибке
    }
  },
    // Открыть диалог для редактирования комментария
    editComment(comment) {
      this.editedComment = { ...comment }; // Копируем данные комментария
      this.editDialog = true; // Открываем диалог
    },
    // Обновить комментарий на сервере
    async updateComment() {
      try {
        await axios.put(`/article/${this.articleId}/comment/${this.editedComment.id}`, this.editedComment);
        const index = this.comments.findIndex(c => c.id === this.editedComment.id);
        if (index !== -1) {
          this.comments.splice(index, 1, { ...this.editedComment }); // Обновляем комментарий
        }
        this.closeEditDialog();
      } catch (error) {
        console.error('Ошибка при обновлении комментария:', error);
      }
    },
    // Закрыть диалог редактирования
    closeEditDialog() {
      this.editDialog = false;
      this.editedComment = { id: null, content: '' }; // Сбрасываем состояние
    },
    // Удалить комментарий
    async deleteComment(id) {
      try {
        await axios.delete(`/article/${this.articleId}/comment/${id}`);
        this.comments = this.comments.filter(comment => comment.id !== id); // Удаляем комментарий из списка
      } catch (error) {
        console.error('Ошибка при удалении комментария:', error);
      }
    },
  },
  created() {
    this.loadComments();
  },
};
</script>