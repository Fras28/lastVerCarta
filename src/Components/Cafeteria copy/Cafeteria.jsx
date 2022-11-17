import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { jsonCafe } from "../json";


export const Cafeteria = () => {

  const Cafex = jsonCafe.filter((e) => e.section === "Cafe");
  const CafeEspecial = jsonCafe.filter((e) => e.section === "Cafe Especial");
  const Infusionesx = jsonCafe.filter((e) => e.section === "Infusiones");
  const ColdBrew = jsonCafe.filter((e) => e.section === "Cold Brew");
  const CafeFrio = jsonCafe.filter((e) => e.section === "Cafe Frio");
  const Desayunox = jsonCafe.filter((e) => e.section === "DESAYUNO");

  return (
    <div className="containerL">
       <Nav/>
  <div  className="conteinerLC">
    <div className="conteinerLB2">
      <h2 className="titleSection">CAFE</h2>
      <Cards products={Cafex} />
      <h2 className="titleSection">CAFE ESPECIAL</h2>
      <Cards products={CafeEspecial} />
      <h2 className="titleSection">INFUCIONES</h2>
      <Cards products={Infusionesx} />
      <h2 className="titleSection">COLD BREW</h2>
      <Cards products={ColdBrew} />
      <h2 className="titleSection">CAFE FRIO</h2>
      <Cards products={CafeFrio} />
      <h2 className="titleSection">DESAYUNO</h2>
      <Cards products={Desayunox} />
        </div>
  </div>

    </div>
  );
};
