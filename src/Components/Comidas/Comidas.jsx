import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Comidas.css";
import { jsonCafe } from "../json";
import { Foot } from "../Footer/Footer.jsx";
import { Nav } from "../Nav/Nav.jsx";

export const Comidas = () => {

  const Cafex = jsonCafe.filter((e) => e.section === "PASTELERÍA");
  const CafeEspecial = jsonCafe.filter((e) => e.section === "TORTAS");
  const Infusionesx = jsonCafe.filter((e) => e.section === "TARTAS");
  const ColdBrew = jsonCafe.filter((e) => e.section === "PIZZAS");
  const CafeFrio = jsonCafe.filter((e) => e.section === "BURGER");
  const Desayunox = jsonCafe.filter((e) => e.section === "TAPEOS");

  return (
    <div className="containerL">
       <Nav/>
  <div  className="conteinerLC">
    <div className="conteinerLB2">
      <h2 className="titleSection">PASTELERÍA</h2>
      <Cards products={Cafex} />
      <h2 className="titleSection">TORTAS</h2>
      <Cards products={CafeEspecial} />
      <h2 className="titleSection">TARTAS</h2>
      <Cards products={Infusionesx} />
      <h2 className="titleSection">PIZZAS</h2>
      <Cards products={ColdBrew} />
      <h2 className="titleSection">BURGER</h2>
      <Cards products={CafeFrio} />
      <h2 className="titleSection">TAPEOS</h2>
      <Cards products={Desayunox} />
        </div>
  </div>

    </div>
  );
};
