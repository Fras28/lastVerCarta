import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";

export const Inicio = (url) => {

  const toTop = ()=>{
    window.scrollTo(0,0);
  }
   toTop();

    console.log(url)
    if (url.location.pathname === "/") {
        url.location.pathname = "/sinMesa";
        console.log(url.location.pathname);
      }
  return (
    <div className="LandingBack">


      <NavLink to={`${url.location.pathname}`}>
          
      <div className="marcaLanging ">
     <h1 className="nameCart">Carta digital interactiva</h1>
      </div>
        </NavLink>
      <div className="btnEnter">

        <AlertDialogSlide/>

      
        <Link to={`${url.location.pathname}/Landing`}>
        <button className="Enter animate__animated  animate__zoomIn animate__fast" >Entrar</button>
        </Link>
     
      </div>

    </div>
  );
};
