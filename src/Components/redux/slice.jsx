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
    cancelBagProducts:(state, action) => {
      console.log(action,"acaaa estado action");
     const indexProd = state.favProd.indexOf(action.payload)
     if(indexProd !==" -1"){
       const newBag = state.favProd.splice(indexProd,1)
       state.favProd = state.favProd.filter(e => e !== newBag)
     }else  state.favProd = state.favProd 
    }
  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

export const asyncallProducts = () => {

  return async function (dispatch) {
    return dispatch(allProducts({jsonCafe}));
  };
};

export const asyncfavProducts = (pedido) => {
  return async function (dispatch) {
    return dispatch(favProducts(pedido));
  };
};
export const asyncCancelFav = (pedido) => {
  console.log(pedido, "asynzfavProd")
  return async function (dispatch) {
    return dispatch(cancelBagProducts(pedido));
  };
};

//----------------------------------------------------------------------------------------------------------------

export const {
  allProducts,
  favProducts,
  cancelBagProducts
  
} = dataSlice.actions;

export default dataSlice.reducer;
