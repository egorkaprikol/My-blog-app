import axios from '@/api/config';

export const fetchCommentsByDate = async (dateFrom, dateTo) => {
    const response = await axios.get(`http://localhost:3001/analytic/comments`, {
        params: {
            dateFrom,
            dateTo,
        },
    });
    return response.data;
};