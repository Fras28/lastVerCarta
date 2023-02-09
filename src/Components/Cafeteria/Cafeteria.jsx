import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import { useParams } from "react-router";


export const Cafeteria = (id) => {

  const toTop = ()=>{
    window.scrollTo(0,0);
  }
   toTop();
   
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
      <div className="conteinerLC ">
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
