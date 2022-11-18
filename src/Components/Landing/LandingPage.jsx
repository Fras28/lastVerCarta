import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import Loguito from "../assets/BastLogo.png"

export default function LandingPage() {
  return (
    <div className="containerL">
        <div className="naviLanding"><NavLink to="/">
        <img src={Loguito} alt=""/>
        <p className="nMenu">.  :  NUESTRO MENU  :  .</p>
         </NavLink>
        </div> 
      <div className="conteinerLB">

      <div className="conteinerLB2">
        <NavLink className="navLink" to="/Cafeteria">
     <p className="titInicio">CAFETERIA/PASTELERIA</p>
        </NavLink>
        <NavLink className="navLink" to="/Comidas">
     <p className="titInicio">COMIDAS</p>
     </NavLink>
     <p className="titInicio">BEBIDAS</p>
     <p className="titInicio">MENU DEL DIA</p>
      </div>
      </div>
    </div>
  );
}