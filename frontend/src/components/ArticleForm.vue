<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="article.title" :rules="[rules.required, rules.max]" label="Название статьи"
          required></v-text-field>
        <v-textarea v-model="article.content" :rules="[rules.required]" label="Текст статьи" required></v-textarea>
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
import axios from 'axios';

export default {
  props: {
    articleId: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: 'Новая статья'
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
    };

  },
  mounted() {
    // if (this.articleId) {
    //   this.$store.dispatch('fetchArticle', this.articleId).then(article => {
    //     this.article = article;
    //   });
    // }
    // this.count = this.$store.state.count
    this.article = axios
      .get('http://localhost:3001/article/1')
      .then(response => this.article = response.data)

  },
  methods: {
    submitForm() {
      this.$refs.form.validate();
      if (this.valid) {
        if (this.articleId) {
          this.$store.dispatch('updateArticle', this.article);
        } else {
          this.$store.dispatch('createArticle', this.article);
        }
        this.$router.push('/articles');
      }
    }
  }
};
</script>