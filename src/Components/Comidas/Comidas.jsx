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
    <div className="sectioner">
      <a href="#1">Pastelería</a>
      <a href="#2">Tortas</a>
      <a href="#3">Tartas</a>
      <a href="#4">Pizzas</a>
      <a href="#5">Burguers</a>
      <a href="#6">Tapeos</a>
    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="1"
        />
        <Cards products={Cafex} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="2"
        />
        <Cards products={CafeEspecial} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="3"
        />
        <Cards products={Infusionesx} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="4"
        />
        <Cards products={ColdBrew} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="5"
        />
        <Cards products={CafeFrio} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="6"
        />
        <Cards products={Desayunox} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
