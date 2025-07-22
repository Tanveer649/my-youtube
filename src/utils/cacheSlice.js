import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "Search",
    initialState : {

    },
    reducers :{
        cacheResults : (state, action) => {
            state = Object.assign(state, action.payload)
            //Basically we are merging 2 object state and payload "iphone : [1,2,3]" 
            // in the state and updating that state as current state,
        },
    },
});


export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer;