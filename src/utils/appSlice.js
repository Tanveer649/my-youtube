import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
    },
    reducers :{
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closedMenu : (state) =>{
            state.isMenuOpen = false;
        }
    },
});
//closedMenu for watchpage. In watchpage like if we click any video then the sidebar must be collapsed.
// if we use toggleMenu action then it may be either true or false, it work in case of false but not will work for true.
//Thats why we have defined action which make sure that the sidebar state is always false.

export const {toggleMenu,closedMenu} = appSlice.actions;
export default appSlice.reducer;