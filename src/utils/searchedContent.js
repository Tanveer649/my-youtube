import { createSlice } from "@reduxjs/toolkit";


const searchedContent = createSlice({
    name : "searchedQuery",
    initialState :{
        Content : "",
    },
    reducers : {
        SearchContent : (state,action) =>{
            state.Content = action.payload;
        },
        ClearSearchContent : (state) =>{
            state.Content = "";
        }
    },
});


export const {SearchContent,ClearSearchContent} = searchedContent.actions;
export default searchedContent.reducer;