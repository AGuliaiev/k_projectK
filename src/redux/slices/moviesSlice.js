import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: {
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: [],
    },

    movieById: null,
    loading: false,
    error: null,
    pages: 0

};

const all = createAsyncThunk(
    'moviesSlice/all',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);

            return data



        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const allNow = createAsyncThunk(
    'moviesSlice/allNow',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAllNow();
            return data


        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const fetchMovieById = createAsyncThunk(
    'moviesSlice/fetchMovieById',
    async (id, thunkAPI) => {
        try {
            const { data } = await movieService.getById(id);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(all.fulfilled, (state, action) => {

            state.movies = action.payload;
            state.pages = action.payload
            console.log('yyy', action.payload)



        })
            .addCase(allNow.fulfilled, (state, action) => {
                state.movies = action.payload;

            })
            .addCase(fetchMovieById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.loading = false;
                state.movieById = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },

});

const {reducer: moviesReducer, actions} = moviesSlice;


const moviesActions = {
    ...actions,
    all,
    fetchMovieById,
    allNow
}
export {
    moviesReducer,
    moviesActions
}