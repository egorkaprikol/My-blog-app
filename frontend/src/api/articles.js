import axios from '@/api/config';

export async function fetchArticles() {
    try {
        const response = await axios.get(`/article`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
        return null;
    }
}

export async function fetchArticle(id) {
    try {
        const response = await axios.get(`article/${id}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке статьи:', error);
    }
}

export async function deleteArticleById(id) {
    try {
        const response = await axios.delete(`article/${id}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении статьи:', error);
        throw error;
    }
}

export async function createArticle(articleData) {
    try {
        const response = await axios.post('article', articleData);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании статьи:', error);
        throw error;
    }
}

export async function updateArticle(id, updatedArticle) {
    try {
        const response = await axios.patch(`article/${id}`, updatedArticle);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении статьи:', error);
        throw error;
    }
}