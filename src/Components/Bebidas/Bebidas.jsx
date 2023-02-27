import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import bebidas from "../assets/bebidas.webp";
import pepsi from "../assets/papsi.jpg"

export const Bebidas = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "SIN ALCOHOL");
  const cerveza = jsonCafe.filter((e) => e.section === "CERVEZA");
  const cocteleriaC = jsonCafe.filter((e) => e.section === "COCTELERIA CLASSICA");
  const cocteleriaE = jsonCafe.filter((e) => e.section === "COCTELERIA ESPECIAL");
  const VINOS = jsonCafe.filter((e) => e.section === "VINOS & CHAMPAGNE");
  

  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#5">Vinos</a>
      <a href="#2">Cerveza</a>
      <a href="#3">Cocteleria clasica</a>
      <a href="#4">Cocteleria especial</a>
      <a href="#1">Sin alcohol</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src={pepsi}
          alt="promo"
          id="1"
          width="100%"
        />
        <Cards products={sAlcohol} />
        <img
          src="https://i.pinimg.com/736x/51/48/19/5148190195f630dd1fca0fe1e7f9e5ff.jpg"
          alt="promo"
          id="2"
          width="100%"
        />
        <Cards products={cerveza} />
        <img
          src="https://i.pinimg.com/736x/e9/d2/ff/e9d2ffac627aec3f38a4cead1465902d.jpg"
          alt="promo"
          id="3"
          width="100%"
        />
        <Cards products={cocteleriaC} />
        <img
            src={bebidas}
          alt="promo"
          id="4"
          width="100%"
        />
        <Cards products={cocteleriaE} />
        <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKWnQaMbHpO38lAez0fXk9lNMy5tzXJ9e3w&usqp=CAU"
          alt="promo"
          id="5"
          width="100%"
        />
        <Cards products={VINOS} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
