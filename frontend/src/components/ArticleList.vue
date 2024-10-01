<template>
    <main>
        <nav>
            <router-link to="/">На главную</router-link>
        </nav>
        <router-view />
        <v-data-table :headers="headers" :items="articles" :items-per-page="5" class="elevation-1">
            <template v-slot:item.actions="{ item }">
                <v-icon @click="editArticle(item.id)">mdi-pencil</v-icon>
                <v-icon @click="deleteArticle(item.id)">mdi-delete</v-icon>
            </template>
        </v-data-table>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    computed: {
        articles() {
            return this.$store.getters.articles;
        }
    },
    data() {
        return {
            headers: [
                { text: 'Название', value: 'title' },
                { text: 'Дата создания', value: 'createdAt' },
                { text: 'Действия', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.articles = axios
            .get('http://localhost:3001/article')
            .then(response => this.articles = response.data)

    },
    methods: {
        editArticle(articleId) {
            this.$router.push(`/article/${articleId}/edit`);
        },
        deleteArticle(articleId) {
            this.$store.dispatch('deleteArticle', articleId);
        }
    }
};
</script>