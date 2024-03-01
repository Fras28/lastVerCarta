import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import bebidas from "../assets/bebidas.webp";
import pepsi from "../assets/papsi.jpg"

export const Verdulerias = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "VERDULERIA");

  

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
          src="https://st.depositphotos.com/1009051/3222/i/450/depositphotos_32227773-stock-photo-a-lot-of-fresh-fruits.jpg"
          alt="promo"
          id="1"
          width="100%"
        />
        <Cards products={sAlcohol} />
       
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
