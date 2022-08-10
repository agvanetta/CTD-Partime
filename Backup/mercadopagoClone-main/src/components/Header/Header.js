import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./Header.css";
import img from "./moreinfoimg.png";
import { BsCaretUpFill } from "react-icons/bs";
import HelperContext from "../../context/HelperContext";


function Header() {
  const { styleSidebar } = useContext(HelperContext);

  const [clicked, setClicked] = useState("none");
  const [position, setPosition] = useState("none");
  const [notification, setNotification] = useState("on");

  function doClick() {
    setPosition("fixed");
    setClicked("unset");
    setNotification("off");
  }

  function didClick() {
    setClicked("none");
  }

  return (
    <div className="header">
      <div className="header__right">
        <p>{styleSidebar}</p>
        <span
          className={notification === "on" ? "header__notification" : "none"}
        >
          1
        </span>
        <div
          onClick={clicked === "none" ? doClick : didClick}
          style={{ fontSize: "25px" }}
        >
          <FontAwesomeIcon icon={faBell} />
        </div>

        <div
          className="header__right__moreinfo"
          style={{ display: clicked, position: position }}
        >
          <div className="header__right__moreinfo__2">
            <div>Notificaciones</div>
            <span onClick={clicked === "none" ? doClick : didClick}>x</span>
          </div>

          <div className="header__right__moreinfo__3">
            <div>
              <img
                className="header__right__moreinfo__img"
                src={img}
                alt="img_moreinfo"
              />
            </div>
            <div>
              <h2>¡Ya enviamos tu transferencia!</h2>
              <p>A Agustin Vanetta. cuenta del Banco Santander Rio .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
