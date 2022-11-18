import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../Cards/Cards";import { CardsBag } from "../CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import { asyncfavProducts } from "../redux/slice";


export const Bag =()=>{
let dispatch = useDispatch()
let {favProd} =useSelector((state) => state.alldata);
console.log(favProd)
// useEffect(() => {
//  dispatch(asyncfavProducts());
//   }, [ dispatch]);


    return(
        <div className="backBag">
             <Nav />
<h1 className="titBag">TU PEDIDO !</h1>
<CardsBag products={favProd}/>
        </div>
    )
}