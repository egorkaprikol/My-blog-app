import axios  from '@/Api/config';

export async function fetchComments(articleId) {
    try {
        const response = await axios.get(`article/${articleId}/comment`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
        throw error;
    }
}

export async function fetchComment(articleId, commentId) {
    try {
        const response = await axios.get(`article/${articleId}/comment/${commentId}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке комментария:', error);
    }
}

export async function createComment(articleId, commentData) {
    try {
        const response = await axios.post(`article/${articleId}/comment`, commentData);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании комментария:', error);
        throw error;
    }
}