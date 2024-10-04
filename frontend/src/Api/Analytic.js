import axios from '@/Api/config';

export const fetchCommentsByDate = async (articleId, dateFrom, dateTo) => {
    const response = await axios.get(`http://localhost:3001/analytic/comments`, {
        params: {
            articleId,
            dateFrom,
            dateTo,
        },
    });
    return response.data;
};