import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncCancelFav, asyncfavProducts } from "../../redux/slice";
import "./Card.css";

export const Card = ({ producto }) => {
  let { favProd } = useSelector((state) => state.alldata);
  const thisFav = favProd?.filter((e) => e.name === producto.name);
  const dispatch = useDispatch();
  const [articles, setArticles] = useState({
    name: [],
    price:[]
  });

  let artAdd = function addArticle(e) {
    // e.preventDefault()
    setArticles({
      ...articles,
      name: [producto.name],
      price: [producto.price],
    });
    dispatch(asyncfavProducts(producto));
    setArticles({
      ...articles,
      name: [],
      price: [],
    });
  };

  let cancelFav = function cancelBagArticle(e) {
    dispatch(asyncCancelFav(producto.name));
  };

  return (
    <div className="contCard">
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="price">${producto.price}</p>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
        <div className="divBtnProd">
          {thisFav.length === 0 ? (
            <button className="btnPlus" onClick={artAdd}>
              Agregar
            </button>
          ) : (
            <div className="masMenos">
              <button className="btn-svg" onClick={cancelFav}>
                {/* <svg
                  // width="10"
                  // height="10"
                  className="svg-plus"
                  viewBox="0 0 934 255"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M806.52 0.906616H127.013C81.6385 0.906616 39.7064 25.1146 17.0184 64.4119C-5.66956 103.709 -5.66956 152.125 17.0184 191.428C39.7064 230.725 81.6385 254.933 127.013 254.933H806.52C851.894 254.933 893.826 230.725 916.514 191.428C939.202 152.125 939.202 103.709 916.514 64.4119C893.826 25.1146 851.894 0.906616 806.52 0.906616V0.906616Z"
                    fill="white"
                  />
                </svg> */}
                -
              </button>
              <p className="cuantiti">{thisFav.length}</p>
              <button className="btn-svg" onClick={artAdd}>
                {/* <svg
                  // width="15"
                  // height="10"
                  className="svg-plus"
                  viewBox="0 0 728 728"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.246 269.753H269.753V50.246C269.753 -16.7487 457.526 -16.7487 457.526 50.246V269.753H677.033C744.027 269.753 744.027 457.526 677.033 457.526H457.526V677.033C457.526 744.027 269.753 744.027 269.753 677.033V457.526H50.246C-16.7487 457.526 -16.7487 269.753 50.246 269.753V269.753Z"
                    fill="white"
                  />
                </svg> */}
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
