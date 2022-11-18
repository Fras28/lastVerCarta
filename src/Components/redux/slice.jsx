import { createSlice } from "@reduxjs/toolkit";

import {jsonCafe} from "../json"


const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd:[]
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

    favProducts:(state, action) => {
      console.log(action,"acaaa estado action");
 
    state.favProd =[...state.favProd, action.payload]
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

export const asyncfavProducts = (pedido) => {
  console.log(pedido, "asynzfavProd")
  return async function (dispatch) {
    return dispatch(favProducts(pedido));
  };
};

//----------------------------------------------------------------------------------------------------------------

export const {
  allProducts,
  favProducts
  
} = dataSlice.actions;

export default dataSlice.reducer;
