import React from "react";
import perfilIcon from "../images/Icon/profileperfil.png";
import { NavLink } from "react-router-dom";
import notificaionIcon from "../images/Icon/notifications.png";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div>
      <h1>
        <NavLink to='/start'>Konekta2</NavLink>
      </h1>
      <div className='botonesNav'>
        <NavLink className='navPerfil' to='/perfil'>
          <img src={perfilIcon} alt='perfil' />
        </NavLink>
        <NavLink className='navNoti' to='/notificacion'>
          <img src={notificaionIcon} alt='notification' />
        </NavLink>
      </div>
    </div>
  );
};

export default navbar;
