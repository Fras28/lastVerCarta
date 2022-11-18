import { createSlice } from "@reduxjs/toolkit";

import {jsonCafe} from "../json"


const initialState = {
  allProduct: [],
  copyallProducts: [],
  genres: [],
  details: {},
  infoInput: {},
  user: {},
  commetDeleteMessage: "",
  commentMovie: {},
  commentFromMovies: [],
  allUsers: [],
  payPaypalSil: {},
  payPaypalGold: {},
  favoriteMovie: [],
  categorySwich: {},
  lastFavorite:{}
};

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      console.log(action.payload.jsonCafe , "===========REDUCER===========")
      state.allProduct = action.payload.jsonCafe;
      state.copyallProducts = action.payload.jsonCafe;
    },


  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

export const asyncallProducts = () => {
  console.log({jsonCafe},"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  return async function (dispatch) {
    return dispatch(allProducts({jsonCafe}));
  };
};


//----------------------------------------------------------------------------------------------------------------

export const {
  allProducts,
  
} = dataSlice.actions;

export default dataSlice.reducer;
