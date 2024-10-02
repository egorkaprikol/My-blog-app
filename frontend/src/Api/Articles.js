import axios  from '@/Api/config';

export async function fetchArticles() {
    try {
        const response = await axios.get(`article`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
        throw error;
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