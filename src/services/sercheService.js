// import {apiService} from "./apiService";
// import {urls} from "../constans/urls";
// import axios from "axios";
//
//
// const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
// const sercheService = async name => {
//     const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&page=&include_adult=false&with_genres=&query=${name}`)
// return data.results
// }
//     // getAll: (name) => apiService.get(urls.search.movies(name) + `&api_key=${apiKey}`, {params: {name}}),
//
//
// export {
//     sercheService
// }

import {apiService} from "./apiService";

// const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
const serService = (query) => {
   return  fetch(`https://api.themoviedb.org/3/search/movie?api_key=ddb43a60b8283b1dccd0de534703fffa&include_adult=false&with_genres=&query=${query}`)
        .then(response => response.json())

}
const sercheService = {
    getAll: (name) => apiService.get(`/search/movie?api_key=ddb43a60b8283b1dccd0de534703fffa&language=en-US&page=1&include_adult=false&with_genres=&query=${name}`)

}


export {
    sercheService,
    serService
}
