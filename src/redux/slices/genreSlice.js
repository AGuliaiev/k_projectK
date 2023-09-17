
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { genreService } from "../../services/genreService";

const initialState = {

        genres: [],
        loading: false,
        error: null,
        movies: [],
        pages: 0,


};

const all = createAsyncThunk(
    "genreSlice/all",
    async (_, thunkAPI) => {
        try {
            const { data } = await genreService.getAll();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const genreById = createAsyncThunk(
    "genreSlice/genreById",
    async ({ id, page }, thunkAPI) => { // Обновлено: принимает объект с id и page
        try {
            const { data } = await genreService.getById(id, page); // Обновлено: передается page
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(all.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(all.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(genreById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(genreById.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;

            })
            .addCase(genreById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

const { reducer: genreReducer, actions } = genreSlice;

const genreActions = {
    ...actions,
    all,
    genreById,
};

export { genreReducer, genreActions };
