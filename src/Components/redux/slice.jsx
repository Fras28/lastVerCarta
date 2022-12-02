import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { jsonCafe } from "../json";

const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd: [],
};

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.allProduct = action.payload.jsonCafe;
      state.copyallProducts = action.payload.jsonCafe;
    },

    favProducts: (state, action) => {
      state.favProd = [...state.favProd, action.payload];
    },
    cancelBagProducts: (state, action) => {
      const indexProd = state.favProd.map(object => object.name).indexOf(action.payload);
      console.log(indexProd);
      if (indexProd !== "-1") {
        const newBag = state.favProd.splice(indexProd,1)
        state.favProd = state.favProd.filter(e => e !== newBag)
      } 
     },
    SearchProducts: (state, action) => {
      state.copyallProducts = state.copyallProducts
        .filter((e) => e.name.includes(action.payload) === true)
        .slice(0, 10);
    },
  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

export const asyncallProducts = () => {
  return async function (dispatch) {
    return dispatch(allProducts({ jsonCafe }));
  };
};

export const asyncfavProducts = (pedido) => {
  return async function (dispatch) {
    return dispatch(favProducts(pedido));
  };
};
export const asyncCancelFav = (pedido) => {
  return async function (dispatch) {
    return dispatch(cancelBagProducts(pedido));
  };
};
export const asyncSearchBar = (string) => {
  return async function (dispatch) {
    return dispatch(SearchProducts(string));
  };
};
export const asyncOrder = (pedido)=>{
console.log(pedido, "este es el pedido slice")
  return async function ( dispatch ){
    try{
      await axios.post(`https://ecommerce-demo.onrender.com/addP`,pedido);
      console.log("posteado correctamente, sliceee")
        return dispatch()
    }catch(error){
      console.log(error, "from Order")
    }
  }
}

//----------------------------------------------------------------------------------------------------------------

export const { allProducts, favProducts, cancelBagProducts, SearchProducts } =
  dataSlice.actions;

export default dataSlice.reducer;
