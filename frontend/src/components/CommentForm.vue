<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
            <v-card-title>
                {{ title }}
            </v-card-title>
            <v-textarea v-model="comment.content" :rules="[rules.required, rules.max]" required></v-textarea>
            <v-card-actions>
                <v-btn color="primary" :disabled="!valid" @click="submitForm">
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
import { createComment, fetchComment, updateComment } from '@/api/comments';

export default {
    props: {
        articleId: {
            type: Number,
            required: true
        },
        commentId: {
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
            comment: {
                content: ''
            },
            title: 'Новый комментарий'
        };
    },
    methods: {
        async loadComment() {
            if (this.commentId) {
                try {
                    this.title = 'Редактирование комментария'
                    const commentData = await fetchComment(this.articleId, this.commentId);
                    this.comment = commentData;
                } catch (error) {
                    console.error('Ошибка при загрузке комментария:', error);
                }
            }
        },
        async submitForm() {
            this.$refs.form.validate();
            if (this.valid) {
                try {
                    if (this.commentId) {
                        await updateComment(this.articleId, this.commentId, this.comment);
                        alert('Комментарий успешно обновлен');
                    } else {
                        await createComment(this.articleId, this.comment);
                        alert('Комментарий успешно создан!');
                    }
                    this.$router.push(`/article/${this.articleId}/comment`);
                } catch (error) {
                    console.error('Ошибка при сохранении комментария:', error);
                }
            }
        }
    },
    created() {
        this.loadComment();
    }
};
</script>