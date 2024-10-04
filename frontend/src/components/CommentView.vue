<template>
    <div class="centered-container">
        <nav>
            <router-link :to="{ name: 'CommentList', params: { articleId } }">Список комментариев</router-link>
        </nav>
    </div>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>Комментарий</v-card-title>
                    <v-card-text>{{ comment.content }}</v-card-text>
                    <v-card-subtitle>Создано: {{ comment.createdAt }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="primary" @click="editComment">Редактировать</v-btn>
                        <v-btn color="error" @click="deleteComment">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { fetchComment, deleteCommentById } from '@/api/comments';

export default {
    props: ['articleId', 'commentId'],
    data() {
        return {
            comment: {},
        };
    },
    methods: {
        async loadComment() {
            try {
                const commentData = await fetchComment(this.articleId, this.commentId);
                this.comment = commentData;
            } catch (error) {
                console.error('Ошибка при загрузке комментария:', error);
            }
        },
        editComment() {
            this.$router.push({ name: 'CommentEdit', params: { articleId: this.articleId, commentId: this.commentId } });
        },
        async deleteComment() {
            if (confirm('Вы уверены, что хотите удалить этот комментарий?')) {
                try {
                    await deleteCommentById(this.articleId, this.commentId);
                    alert('Комментарий успешно удален!');
                    this.$router.push({ name: 'CommentList', params: { articleId: this.articleId } });
                } catch (error) {
                    console.error('Ошибка при удалении комментария:', error);
                }
            }
        },
    },
    created() {
        this.loadComment();
    },
};
</script>