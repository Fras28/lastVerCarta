import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncfavProducts } from "../../redux/slice";
import "./CardB.css";

export const CardBag = ({producto}) => {
console.log(producto.name)
  
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
    }

  return (
    <div className="contCard">
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
        {producto.price}{" "}
        <button className="btnPlus" onClick={artAdd} >
          <svg
            width="20"
            height="20"
            viewBox="0 0 598 598"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M421.493 269.773H327.561V175.841C327.561 159.863 314.645 146.945 298.665 146.945C282.686 146.945 269.769 159.862 269.769 175.841V269.773H175.837C159.859 269.773 146.941 282.69 146.941 298.669C146.941 314.649 159.858 327.565 175.837 327.565H269.769V421.497C269.769 437.476 282.686 450.393 298.665 450.393C314.645 450.393 327.561 437.477 327.561 421.497V327.565H421.493C437.472 327.565 450.389 314.649 450.389 298.669C450.389 282.69 437.395 269.773 421.493 269.773Z"
              fill="black"
            />
            <path
              d="M298.667 0C133.947 0 0 133.947 0 298.667C0 463.387 133.947 597.333 298.667 597.333C463.387 597.333 597.333 463.387 597.333 298.667C597.333 133.947 463.387 0 298.667 0ZM298.667 539.613C165.833 539.613 57.72 431.572 57.72 298.667C57.72 165.833 165.761 57.72 298.667 57.72C431.572 57.72 539.613 165.835 539.613 298.667C539.613 431.499 431.499 539.613 298.667 539.613V539.613Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
