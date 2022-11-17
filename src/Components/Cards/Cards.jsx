import React from "react";
import { Card } from "./Card/Card";



import "./Cards.css";


export const Cards = ({products}) =>{
console.log(products)
  return (
    <div className="carta">
      <div>
      {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}
      </div>
    </div>
  );
}