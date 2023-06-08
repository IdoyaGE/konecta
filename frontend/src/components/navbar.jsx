import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";
import campana from "../images/Icon/campana.png";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div>
      <h1>
        <NavLink to='/start'>Konecta2</NavLink>
      </h1>
      <img src={perfilIcon} alt='perfil' />
      <img src={campana} width='30px' height='30px' alt='notification' />
    </div>
  );
};

export default navbar;
