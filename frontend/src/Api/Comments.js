import axios from '@/api/config';

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

export async function updateComment(articleId, commentId, updatedArticle) {
    try {
        const response = await axios.patch(`article/${articleId}/comment/${commentId}`, updatedArticle);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении комментария:', error);
        throw error;
    }
}

export async function deleteCommentById(articleId, commentId) {
    try {
        const response = await axios.delete(`article/${articleId}/comment/${commentId}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении комментария:', error);
        throw error;
    }
}
