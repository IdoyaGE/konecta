import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";
import notificaionIcon from "../images/Icon/notifications.png";
import LogoNav from "../images/Group 8.png";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <NavLink to="/start">
          <img className="logoNav" src={LogoNav} alt="LogoNav" />
        </NavLink>
      </h1>
      <div className="botonesNav">
        <NavLink className="navPerfil" to="/perfil">
          <img src={perfilIcon} alt="perfil" />
        </NavLink>
        <NavLink className="navNoti" to="/notificacion">
          <img src={notificaionIcon} alt="notification" />
        </NavLink>
      </div>
    </div>
  );
};

export default navbar;
