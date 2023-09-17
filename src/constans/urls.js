const baseURL = process.env.REACT_APP_API;

const discover = '/discover';
const movie = '/movie';
const genre = '/genre';
const list = '/list';
const api_Key ='?api_key=';
const with_Genre = '&with_genres='
const trending = '/trending'
const now = '/now_playing'
const search = '/search'
const credits = '/credits'
const day = '/day'
const apiKey = process.env.REACT_APP_API_KEY;

const urls = {
    discover: {
        base: discover,
        movie: (page) => `${discover}${movie}?api_key=${apiKey}`,
        byId: (id) => `${discover}${movie}${api_Key}${apiKey}${with_Genre}${id}`,
        byGenId: (genre_ids) => `${discover}/${movie}${api_Key}${apiKey}${with_Genre}${genre_ids}`
   },
    credits : {
        base: movie,
        credits: (id) => `${movie}/${id}${credits}${api_Key}${apiKey}`
    },

    movie: {
        base: movie,
        nowPlay: () => `${movie}${now}?api_key=${apiKey}`,
        byId: (id) => `${movie}/${id}?api_key=${apiKey}`,
        trending: () => `${trending}${movie}${day}?api_key=${apiKey}`


    },
    genre: {
        base: genre,
        list: () => `${genre}${movie}${list}?api_key=${apiKey}`,

    },


    search: {
        base: search,
        movies: (name) => `${search}${movie}?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${name}`
    }

};

export { baseURL, urls };
