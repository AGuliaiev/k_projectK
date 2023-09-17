import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';

const movieService = {
    getAll: (page) => apiService.get(urls.discover.movie(apiKey), {params: {page}}),
    // getAll: (page) => apiService.get(urls.movie.trending(apiKey), {params: {page}}),


    getAllNow: () => apiService.get(urls.movie.nowPlay(apiKey)),
    getById: (id) => apiService.get(urls.movie.byId(id))

}

export {
    movieService
}