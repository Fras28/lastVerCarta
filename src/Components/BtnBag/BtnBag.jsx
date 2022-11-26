import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./BtnBag.css"

export const VerPedido = (id)=>{
    let {favProd} =useSelector((state) => state.alldata);
    return(
        <div className="goBag">
          { favProd.length===0? <p></p>:
          <NavLink className="btnGoBag" to={`/${id.id}/Bag`}>
               <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="white" />
          </svg> <p className="pedido">Ver pedido <b className="cantidad">{favProd.length}</b></p>    <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="white" />
          </svg>
          </NavLink>
            }
        </div>
    )
}