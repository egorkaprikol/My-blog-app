<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="article.title" :rules="[rules.required, rules.max]" required></v-text-field>
        <v-textarea v-model="article.content" :rules="[rules.required]" required></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" :disabled="!valid" @click="submitForm">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { createArticle, updateArticle, fetchArticle } from '@/api/articles';

export default {
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      valid: false,
      rules: {
        required: v => !!v || 'Поле обязательно для заполнения',
        max: v => v.length <= 255 || 'Максимальная длина 255 символов'
      },
      article: {
        title: '',
        content: ''
      },
      title: 'Новая статья'
    };
  },
  methods: {
    async loadArticle() {
      if (this.id) {
        try {
          this.title = 'Редактирование статьи';
          const articleData = await fetchArticle(this.id);
          this.article = articleData;
        } catch (error) {
          console.error('Ошибка при загрузке статьи:', error);
        }
      }
    },
    async submitForm() {
      this.$refs.form.validate();
      if (this.valid) {
        try {
          if (this.id) {
            await updateArticle(this.id, this.article);
            alert('Статья успешно обновлена');
          } else {
            await createArticle(this.article);
            alert('Статья успешно создана!');
          }
          this.$router.push('/article');
        } catch (error) {
          console.error('Ошибка при сохранении статьи:', error);
        }
      }
    },
  },
  created() {
    this.loadArticle();
  }
};
</script>