import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsBag } from "./CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import { asyncCancelFav } from "../redux/slice";
import "./myBag.css"


export const Bag =()=>{
let dispatch = useDispatch()
let {favProd} =useSelector((state) => state.alldata);



    return(
        <div className="backBag">
             <Nav />
             <div className="contBag">
<h1 className="titBag">TU PEDIDO !</h1>
<CardsBag products={favProd}/>
        </div>
             </div>
    )
}