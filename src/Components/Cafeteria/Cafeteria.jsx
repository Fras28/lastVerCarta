import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import cafeImg from "../assets/cafe.jpg"

export const Cafeteria = () => {
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
      <Nav />
      <div className="conteinerLC">
        <div className="conteinerLB2">
        <img className="imgsTit" width="99%" height="200px"  src={cafeImg} alt="" />
          <Cards products={Cafex}/>
          <Cards products={CafeEspecial} />
          <Cards products={Infusionesx} />
          <Cards products={ColdBrew} />
          <Cards products={CafeFrio} />
          <Cards products={Desayunox} />
        </div>
      </div>
    </div>
  );
};
