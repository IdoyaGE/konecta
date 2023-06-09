import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";
import notificaionIcon from "../images/Icon/notifications.png";

const navbar = () => {
  return (
    <div>
      <h1>
        <NavLink to="/start">Konecta</NavLink>
      </h1>
      <img src={perfilIcon} alt="perfil" />
      <img src={notificaionIcon} alt="notification" />
    </div>
  );
};

export default navbar;
