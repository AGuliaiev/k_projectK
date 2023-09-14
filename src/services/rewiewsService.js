import axios from "axios";
const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
export const fetchReviews = async id => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
    );
    return data.results;
};
