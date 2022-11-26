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
             <p className="pedido">Ver pedido <b className="cantidad">{favProd.length}</b></p> 
          </NavLink>
            }
        </div>
    )
}