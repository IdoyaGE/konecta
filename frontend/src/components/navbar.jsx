import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";
import notificaionIcon from "../images/Icon/notifications.png";
import LogoNav from "../images/Group 8.png";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo-nav">
        <NavLink to="/start">
          <img className="logoNav" src={LogoNav} alt="LogoNav" />
        </NavLink>
      </h1>
      <div className="botonesNav">
        <NavLink className="navPerfil" to="/perfil">
          <img src={perfilIcon} alt="perfil" />
          {/* <p className="text-navbar">Perfil</p> */}
        </NavLink>
        <NavLink className="navNoti" to="/notificaciones">
          <img src={notificaionIcon} alt="notification" />
          {/* <p className="text-navbar">Notificaciones</p> */}
        </NavLink>
      </div>
    </div>
  );
};

export default navbar;
