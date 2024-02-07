import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncAllProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";

import publi from "../assets/cafPast.jpg";


export const Cafeteria = (id) => {





  const mesa = id.match.url.slice(1, 3);
  console.log(id.match.url.slice(1, 3), "buscando ideeee");

  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    // Función para realizar la acción deseada
    const fetchData = () => {
      console.log("Effect is running");
      dispatch(asyncAllProducts());
    };

    // Ejecutar la función inmediatamente al montar el componente
    fetchData();

    // Configurar la repetición cada 15 minutos
    const intervalId = setInterval(fetchData, 15 * 60 * 1000); // 15 minutos en milisegundos

    // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, [dispatch]);

const CafeteriaProducts = allProduct?.filter((e) => e.attributes?.categorias?.data[0]?.id === 1);



console.log(CafeteriaProducts, " articulos de cafeteria y postres");


  const Cafex = CafeteriaProducts?.filter((e) => e.attributes?.sub_categoria?.data?.id === 1);
  const Desayuno =CafeteriaProducts?.filter((e) => e.attributes?.sub_categoria?.data?.id === 2);
  const DELICATESSEN = CafeteriaProducts?.filter((e) => e.attributes?.sub_categoria?.data?.id === 3);
  console.log(DELICATESSEN, " delicatesens");
  const POSTRES = CafeteriaProducts?.filter((e) => e.attributes?.sub_categoria?.data?.id === 4);

  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
      <a href="#4">Postres</a>
      <a href="#3">Delicatessen</a>
      <a href="#2">Desayuno/Merienda</a>
      <a href="#1">Cafe</a>
    </div>
      <div className="conteinerLC ">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img src={publi} alt="promo" id="1" />
          <Cards products={Cafex} />
          <img src="https://www.elcolectivo.com.ar/u/fotografias/m/2022/10/4/f768x1-87673_87800_174.jpg" alt="promo" id="2" />
         <Cards products={Desayuno} />
          <img src="https://i.pinimg.com/originals/b5/57/59/b5575945f530d0f9b7d4ee4d470b63c6.jpg" alt="promo" id="3" />
          <Cards products={DELICATESSEN} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TipnrNFLzeSVvyG2DcXvmn6PhuPB-jK4-g&usqp=CAU" alt="promo" id="4" />
          <Cards products={POSTRES} />  
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
