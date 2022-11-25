import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { asyncfavProducts } from "../../redux/slice";
import "./Card.css";

export const Card = ({producto}) => {

  
    const dispatch = useDispatch()
    const [articles, setArticles] = useState({
        name:[],
    });

   let artAdd = function addArticle(e){
        setArticles({
            ...articles,
            name: producto.name,
            price:producto.price
        })
        dispatch(asyncfavProducts(producto))
        Swal.fire({
          position: 'bottom-end',
          icon: '',
          title: 'Agregado',
          showConfirmButton: false,
          timer: 350
        })
    }

  return (
    <div className="contCard">
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="price">${producto.price}</p>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
<div className="divBtnProd">

        <button className="btnPlus" onClick={artAdd} >
          Agregar
        </button>
</div>
      </div>
    </div>
  );
};
