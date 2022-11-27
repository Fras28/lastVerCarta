import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import { useParams } from "react-router";


export const Cafeteria = (id) => {
const mesa = id.match.url.slice(1,3)
  console.log(id.match.url.slice(1,3), "buscando ideeee")

  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (allProduct.length === 0) dispatch(asyncallProducts());
  }, [allProduct, dispatch]);

  const Cafex = allProduct?.filter((e) => e.section === "Cafe");
  const CafeEspecial = allProduct?.filter((e) => e.section === "Cafe Especial");
  const Infusionesx = allProduct?.filter((e) => e.section === "Infusiones");
  const ColdBrew = allProduct?.filter((e) => e.section === "Cold Brew");
  const CafeFrio = allProduct?.filter((e) => e.section === "Cafe Frio");
  const Desayunox = allProduct?.filter((e) => e.section === "DESAYUNO");

  return (
    <div className="containerL">
      <Nav  id={mesa}/>
      <div className="sectioner">
        <a href="#1">Cafe</a>
        <a href="#2">Cafe Especial</a>
        <a href="#3">Infusiones</a>
        <a href="#4">Cold Brew</a>
        <a href="#5">Cafe Frio</a>
        <a href="#6">Desayunos</a>
      </div>
      <div className="conteinerLC">
        <div className="conteinerLB2">
          <img
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <div id="1"></div>
          <Cards products={Cafex} />
          <div id="2"></div>
          <Cards products={CafeEspecial} />
          <div id="3"></div>
          <Cards products={Infusionesx} />
          <div id="4"></div>
          <Cards products={ColdBrew} />
          <div id="5"></div>
          <Cards products={CafeFrio} />
          <div id="6"></div>
          <Cards products={Desayunox} />
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
