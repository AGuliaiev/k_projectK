import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sercheService, } from "../../services/sercheService";


const initialState =  {
    movies:[],
    query: ''

};

const getAll = createAsyncThunk(
    'searchSlice/getAll',

    async ({name}, thunkAPI) => {
        try {
            const {data} = await sercheService.getAll(name)
            console.log('Полученные данные:', data);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {


           },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.data = action.payload;


            console.log('p',action.payload)




        })
});

const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    getAll
}

export {
    searchActions,
    searchReducer
}