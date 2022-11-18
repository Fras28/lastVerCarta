import React from "react";
import "./MyFooter.css";

export const MyFoot = () => {
  return (
    <footer className="Mfooty">
      <div className="myLinkss">
        <p className="McontactT">@Developed by <b>Franco Selvarolo ⇻</b></p>
        <a
          className="Mlinks"
          href="https://walink.co/55984b"
          Target="_blank"
        >
    <p className="Mcontact">Whatssap</p>
        </a>
        <a
          className="Mlinks"
          href="https://www.instagram.com/bastardocoffee/"
          Target="_blank"
        >
         <p className="Mcontact">/Instagram</p>
        </a>
        
        <a
          className="Mlinks"
          href="mailto:fselvarolo28@gmail.com"
          Target="_blank"
        >
         <p className="Mcontact">/Email</p>
        </a>
      </div>
    </footer>
  );
};
