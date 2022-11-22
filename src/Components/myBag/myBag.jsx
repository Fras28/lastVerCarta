import React from "react";
import {  useSelector } from "react-redux";
import { CardsBag } from "./CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import "./myBag.css"



export const Bag =(id)=>{


let {favProd} =useSelector((state) => state.alldata);
console.log(favProd)
const volver = ()=>{
    window.history.back()
}

const valores = favProd.map(e => parseInt( e.price,10))
let total =  valores.reduce((a,b)=>a+b,0)


    return(
        <div className="backBag">
             <Nav id={id.match.params.id}/>
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
 {id.match.params.id === "sinMesa"?<p className="textNoMesa"><svg className="warning" width="24" height="24" viewBox="0 0 673 591" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M666.72 533.147C653.73 510.491 391.373 57.7336 368.933 19.0803C354.188 -6.28903 319.048 -5.87303 304.288 19.0803C287.829 46.8976 24.1413 501.387 5.80798 534.294C-7.62402 558.398 7.21424 590.012 37.7813 590.012H634.568C662.323 590.012 682.959 561.408 666.724 533.138L666.72 533.147ZM336.667 530.272C316.052 530.272 299.333 513.564 299.333 492.939C299.333 472.313 316.052 455.605 336.667 455.605C357.292 455.605 374 472.313 374 492.939C374 513.564 357.292 530.272 336.667 530.272ZM359.068 410.808C359.068 425.74 351.599 433.209 336.667 433.209C321.734 433.209 314.265 425.741 314.265 410.808L291.864 194.275C291.864 171.873 306.796 149.472 336.667 149.472C366.531 149.472 381.469 171.873 381.469 194.275L359.068 410.808Z" fill="#18a59d"/>
</svg>
Para realizar tu pedido por este medio debes encontrarte en alguna mesa <svg className="warning" width="24" height="24" viewBox="0 0 673 591" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M666.72 533.147C653.73 510.491 391.373 57.7336 368.933 19.0803C354.188 -6.28903 319.048 -5.87303 304.288 19.0803C287.829 46.8976 24.1413 501.387 5.80798 534.294C-7.62402 558.398 7.21424 590.012 37.7813 590.012H634.568C662.323 590.012 682.959 561.408 666.724 533.138L666.72 533.147ZM336.667 530.272C316.052 530.272 299.333 513.564 299.333 492.939C299.333 472.313 316.052 455.605 336.667 455.605C357.292 455.605 374 472.313 374 492.939C374 513.564 357.292 530.272 336.667 530.272ZM359.068 410.808C359.068 425.74 351.599 433.209 336.667 433.209C321.734 433.209 314.265 425.741 314.265 410.808L291.864 194.275C291.864 171.873 306.796 149.472 336.667 149.472C366.531 149.472 381.469 171.873 381.469 194.275L359.068 410.808Z" fill="#18a59d"/>
</svg></p>:
        <a   href={`http://wa.me/542915729501?text=Hola Franco Mensaje de mi pedido ➤ ${favProd.map(e =>  e.name+"$"+e.price + ", " )} Total = $ ${total} , estamos en la mesa ${id.match.params.id}`} rel="noreferrer" target="_blank">
       <button className="btnWssp" >Enviar Pedido !</button>
        </a>}
             </div>
    )
}
