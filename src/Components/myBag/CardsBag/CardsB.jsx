import React from "react";

import { CardBag } from "../CardB/CardB";



import "./CardsB.css";


export const CardsBag = ({products}) =>{


  
console.log(products)
  return (
    <div className="cartaB">
  
      <div>
      {products?.map((e)=><CardBag  producto={e}/> )}
       </div>
    </div>
  );
}

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}