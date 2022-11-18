import React from "react";
import { Card } from "./Card/Card";



import "./Cards.css";


export const Cards = ({products}) =>{


  

  return (
    <div className="carta">
        <h2 className="titleSection">{products[0]?.section.toUpperCase()}</h2>
      <div>
      {products?.map((e)=><Card  producto={e}/> )}
       </div>
    </div>
  );
}

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}