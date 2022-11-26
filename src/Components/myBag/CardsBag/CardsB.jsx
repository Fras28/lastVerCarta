import React from "react";
import {Card} from "../../Cards/Card/Card"



import "./CardsB.css";

export const CardsBag = ({ products }) => {
  const valores = products.map((e) => parseInt(e.price, 10));
  let total = valores.reduce((a, b) => a + b, 0);

  return (
    <div className="cartaB">
      <div className="montoTotal">
      <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg><span className="aPagar">Total :${total} </span>   <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
      </div>
      <div className="rowsCardBag">
        {products?.map((e) => (
          <Card producto={e} />
        ))}
      </div>
    </div>
  );
};

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}
