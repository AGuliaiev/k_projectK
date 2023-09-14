import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCasts} from "../../services/castService";

const initialState =  {
    cast: [],
};
const allCast = createAsyncThunk(
    'castSlice/allCast',
    async (id, thunkAPI) =>{
        try {
            const {data} = await fetchCasts(id);
            console.log('Полученные данные:', data);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }

);

const castSlice = createSlice({
    name:'castSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(allCast.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('fack',action.payload)
        })


    }
});


const {reducer: castReducer, actions} = castSlice;

const castActions = {
    ...actions,
    allCast
}

export {
    castReducer,
    castActions
}