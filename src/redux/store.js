import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {genreReducer} from "./slices/genreSlice";

import {searchReducer} from "./slices/searchSlice";
import {castReducer} from "./slices/castSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genreSlice: genreReducer,
        casts: castReducer,
        search: searchReducer
    }
});

export {
    store
}
