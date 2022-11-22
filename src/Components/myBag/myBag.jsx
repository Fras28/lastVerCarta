import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsBag } from "./CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import "./myBag.css"
import { useParams } from "react-router";


export const Bag =()=>{
  const {id} = useParams()
let dispatch = useDispatch()
let {favProd} =useSelector((state) => state.alldata);
const volver = ()=>{
    window.history.back()
}

    return(
        <div className="backBag">
             <Nav />
   <div className="bagSect">
<h1 className="titBag"><b className="leta1">T</b><b className="leta2">U</b><b className="leta3"> P</b><b className="leta4">E</b><b className="leta1">D</b><b className="leta2">I</b><b className="leta3">D</b><b className="leta4">O</b>
</h1>
<button  className="btnBack" onClick={volver} ><svg width="24" height="24" viewBox="0 0 934 747" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M933.333 746.672C933.333 746.672 830.104 570.645 684.44 497.779C596.336 453.727 435.547 435.56 435.547 435.56V622.227L0 311.107L435.547 0V186.667C435.547 186.667 671 226.177 808.88 373.333C946.76 520.493 933.328 746.667 933.328 746.667L933.333 746.672Z" fill="black"/>
</svg></button>
    </div>         
     <div className="contBag">
<CardsBag products={favProd}/>
        </div>
        <a   href={`http://wa.me/542915729501?text=Hola Franco Mensaje de mi pedido , estamos en la mesa ${id}`} rel="noreferrer" target="_blank">

        <button className="btnWssp" >Enviar WSSP</button>
        </a>
             </div>
    )
}
