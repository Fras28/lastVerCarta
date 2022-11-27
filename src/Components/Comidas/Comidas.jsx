import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Comidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";

export const Comidas = (id) => {
  const mesa = id.match.url.slice(1,3)
  console.log(id.match.url.slice(1,3), "buscando ideeee")

  
  const Cafex = jsonCafe.filter((e) => e.section === "PASTELERÍA");
  const CafeEspecial = jsonCafe.filter((e) => e.section === "TORTAS");
  const Infusionesx = jsonCafe.filter((e) => e.section === "TARTAS");
  const ColdBrew = jsonCafe.filter((e) => e.section === "PIZZAS");
  const CafeFrio = jsonCafe.filter((e) => e.section === "BURGER");
  const Desayunox = jsonCafe.filter((e) => e.section === "TAPEOS");

  return (
    <div className="containerL">
     <Nav id={mesa} />
  <div  className="conteinerLC">
    <div className="conteinerLB2">

      <Cards products={Cafex} />
      <Cards products={CafeEspecial} />
      <Cards products={Infusionesx} />
      <Cards products={ColdBrew} />
      <Cards products={CafeFrio} />
      <Cards products={Desayunox} />
        </div>
  </div>
  <VerPedido id={mesa} />
    </div>
  );
};
