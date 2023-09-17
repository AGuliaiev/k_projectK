import {apiService} from "./apiService";
import {urls} from "../constans/urls";


const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
const genreService = {
    getAll: () => apiService.get(urls.genre.list(apiKey)),
   // getById: (id) => apiService.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}` ),
    getById: (id, page) => apiService.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&page=${page}`),



}

export {
    genreService
}