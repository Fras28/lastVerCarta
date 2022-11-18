import React from "react";

import { CardBag } from "./Card/CardB";



import "./CardsB.css";


export const CardsBag = ({products}) =>{


  
console.log(products)
  return (
    <div className="carta">
        <h2 className="titleSection">{products[0]?.section.toUpperCase()}</h2>
      <div>
      {products?.map((e)=><CardBag  producto={e}/> )}
       </div>
    </div>
  );
}

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}