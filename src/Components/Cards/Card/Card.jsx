import React from "react";
import "./Card.css"

export const Card = ({nombre, detalle, precio})=>{
    return(
        <div className="contCard">
            <div className="leftInfo">
            <h2 className="nameProd">{nombre}</h2>
            <p className="detProd">{detalle}</p>
            </div>
            <div className="rightInfo">{precio}</div>
        </div>
    )
}