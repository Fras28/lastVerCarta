import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import Loguito from "../assets/casaMonteLogo.png";
import { useParams } from "react-router";


export default function LandingPage(url) {
console.log(url.location.pathname) 
if (url.location.pathname === "/")
{ url.location.pathname = "/sinMesa"; 
console.log(url.location.pathname) }


  return (
    <div className="containerL">
      <div className="naviLanding titCasa">
        <NavLink to={`${url.location.pathname}`}>
          <h1 className="nameLanding">
            <b className="leta1">C</b>
            <b className="leta2">A</b>
            <b className="leta3">S</b>
            <b className="leta4">A</b>
            <b className="leta2">M</b>
            <b className="leta3">O</b>
            <b className="leta4">N</b>
            <b className="leta1">T</b>
            <b className="leta2">E</b>
          </h1>
        </NavLink>
      </div>
      <div className="conteinerLB">
        <div className="conteinerLB2">
          <NavLink className="navLink" to={url.location.pathname === "/"?`/Cafeteria`:`${url.location.pathname}/Cafeteria`}>
            <p className="titInicio">CAFETERIA/PASTELERIA </p>
          </NavLink>
          <NavLink className="navLink" to={`${url.location.pathname}/Comidas`}>
            <p className="titInicio">COMIDAS</p>
          </NavLink>
          <p className="titInicio">BEBIDAS</p>
          <p className="titInicio">MENU DEL DIA</p>
          <img className="logoCM" src={Loguito} alt="" />
        </div>
      </div>
    </div>
  );
}
