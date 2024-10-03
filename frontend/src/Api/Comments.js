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

export async function fetchComment(commentId) {
    try {
        const response = await axios.get(`article/${articleId}/comment/${commentId}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке комментария:', error);
    }
}