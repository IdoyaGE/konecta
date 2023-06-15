import React from "react";
import Navbar from "./navbar";
import logo1 from "../images/Icon/tramites.png";
import logo2 from "../images/Icon/hogar.png";
import not1 from "../images/Icon/notificación/tramites.png";
import not2 from "../images/Icon/notificación/hogar.png";
import "./Notificaciones.scss";
import Footer from "./Footer";
import logoAtras from "../images/Icon/back.png";
import { NavLink } from "react-router-dom";

const Notificaciones = () => {
  return (
    <div>
      <Navbar />
      <h1 className='texto-noti'>Notificaciones</h1>
      <NavLink to={"/start"}>
        <img className='bton-volver-noti' src={logoAtras} alt='tramites' />
      </NavLink>
      <div>
        <button className='notificacionT'>
          <img className='icon-not-1' src={logo1} alt='tramites' />
          Trámites/Tecnología
          <img className='not-num1' src={not1} alt='notificaion1' />
        </button>
      </div>
      <div>
        <button className='notificacionH'>
          <img className='icon-not-2' src={logo2} alt='tramites' />
          Hogar/Compras
          <img className='not-num2' src={not2} alt='notificaion3' />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Notificaciones;
