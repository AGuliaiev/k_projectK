import axios from "axios";



const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
 const fetchCasts = async (id) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    );
    return data.cast;
};
//
// const fetchCasts = {
//     getCastById: (id) => apiService.get(urls.credits.credits(id))
// }
//
export {
    fetchCasts
}

