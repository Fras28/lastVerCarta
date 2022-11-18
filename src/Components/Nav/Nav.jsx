import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Loguito from "../assets/BastLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchBar, SearchProducts } from "../redux/slice";

export const Nav = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  let copyallProducts = useSelector((state) => state.allData);

  const handleChange = (e) => {
    //setError(false);
    setSearch(e.target.value);
  };
  console.log(copyallProducts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSearchBar(search));

    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    dispatch(asyncSearchBar(search));
    setSearch("");
  };

  return (
    <div className="contNav">
      <div>
        <NavLink to="/">
          <img src={Loguito} alt="" />
        </NavLink>
      </div>
      <div className="section2">
        <form className="formNav" onSubmit={handleSubmit}>
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Que te gustaria comer?"
            required=""
            type="text"
            name="text"
            autofocus
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
          <button className="reset" type="reset" onKeyDown={handleEnter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <NavLink to="/Bag">
          <button className="btnBag">
            <svg
              width="30"
              height="30"
              viewBox="0 0 603 677"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M359.948 338.331C338.855 338.294 318.912 347.966 305.875 364.56C304.729 365.888 303.057 366.659 301.302 366.659C299.547 366.659 297.875 365.888 296.729 364.56C283.693 347.967 263.75 338.295 242.656 338.331C224.182 338.44 206.51 345.873 193.51 358.998C180.51 372.117 173.245 389.862 173.308 408.331C171.537 471.68 210.037 524.18 290.99 568.984C297.412 572.521 305.193 572.521 311.616 568.984C392.569 524.182 431.069 471.682 429.298 408.504V408.499C429.397 390.004 422.147 372.228 409.142 359.072C396.142 345.916 378.449 338.458 359.949 338.338L359.948 338.331Z"
                fill="red"
              />
              <path
                d="M190.482 250.838C190.482 260.504 182.648 268.338 172.982 268.338C163.315 268.338 155.482 260.504 155.482 250.838C155.482 241.171 163.315 233.338 172.982 233.338C182.648 233.338 190.482 241.171 190.482 250.838Z"
                fill="black"
              />
              <path
                d="M435.468 250.838C435.468 260.504 427.635 268.338 417.968 268.338C408.302 268.338 400.468 260.504 400.468 250.838C400.468 241.171 408.302 233.338 417.968 233.338C427.635 233.338 435.468 241.171 435.468 250.838Z"
                fill="black"
              />
              <path
                d="M535.015 197.891C533.562 188.245 528.687 179.443 521.275 173.099C513.869 166.755 504.426 163.287 494.671 163.333H423.807V222.26C433.333 224.208 441.266 230.771 444.958 239.765C448.65 248.765 447.614 259.005 442.197 267.083C436.781 275.16 427.697 280.005 417.973 280.005C408.249 280.005 399.167 275.161 393.749 267.083C388.332 259.005 387.296 248.765 390.989 239.765C394.682 230.771 402.614 224.208 412.14 222.26V163.333H178.806V222.26C188.332 224.208 196.265 230.771 199.957 239.765C203.65 248.765 202.613 259.005 197.196 267.083C191.78 275.16 182.696 280.005 172.972 280.005C163.248 280.005 154.166 275.161 148.748 267.083C143.331 259.005 142.295 248.765 145.988 239.765C149.681 230.771 157.613 224.208 167.139 222.26V163.333H107.941C98.1862 163.287 88.7441 166.755 81.3374 173.099C73.9259 179.443 69.051 188.244 67.5974 197.891L0.446713 629.558C-1.30329 641.323 2.13937 653.271 9.87897 662.307C17.6186 671.344 28.895 676.583 40.791 676.667H561.818C573.714 676.584 584.99 671.344 592.73 662.307C600.469 653.271 603.912 641.323 602.162 629.558L535.015 197.891ZM317.282 579.224C307.334 584.688 295.282 584.688 285.334 579.224C201.391 532.755 159.776 475.203 161.667 408.198V408.193C161.636 386.657 170.141 365.979 185.323 350.698C200.5 335.417 221.12 326.771 242.662 326.657C264.875 326.61 286.12 335.792 301.307 352.011C316.495 335.793 337.739 326.61 359.952 326.657C381.52 326.776 402.155 335.438 417.343 350.745C432.526 366.051 441.026 386.761 440.968 408.323C442.849 475.198 401.219 532.75 317.28 579.217L317.282 579.224Z"
                fill="black"
              />
              <path
                d="M423.815 128.331C423.815 82.4817 399.356 40.1177 359.648 17.191C319.94 -5.73033 271.023 -5.73033 231.315 17.191C191.607 40.1177 167.148 82.483 167.148 128.331V151.664H178.815V128.331C178.815 86.6483 201.05 48.1337 237.148 27.295C273.247 6.45633 317.716 6.45633 353.815 27.295C389.914 48.1337 412.148 86.6497 412.148 128.331V151.664H423.815V128.331Z"
                fill="black"
              />
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
