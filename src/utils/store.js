import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./cacheSlice";
import searchedContent from "./searchedContent"
import chatSlice from "./chatSlice"

const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        searchedQuery : searchedContent,
        chat : chatSlice
    },

});

export default store;