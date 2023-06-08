import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <h1>
        <NavLink to="/start">Konecta</NavLink>
      </h1>
      <img src={perfilIcon} alt="perfil" />
    </div>
  );
};

export default navbar;
