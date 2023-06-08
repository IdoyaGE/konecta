import React from "react";
import logo from "../images/konectatu.png";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import info from "../images/Icon/info.png";
import tramitesIcon from "../images/Icon/tramites.png";
import movilidadIcon from "../images/Icon/movilidad.png";
import hogarIcon from "../images/Icon/hogar.png";
import "./start.scss";

const start = () => {
  return (
    <div>
      <Navbar />
      <h3>¿En que te podemos ayudar?</h3>
      <button className="botonTramites">
        <NavLink to="/chat">
          <img src={tramitesIcon} alt="tramites" />
          <h1 className="textoStart">Tramites</h1>
        </NavLink>
      </button>
      <button className="botonHogar">
        <NavLink to="/chat">
          <img src={hogarIcon} alt="hogar" />
          <h1 className="textoStart">Hogar</h1>
        </NavLink>
      </button>
      <button className="botonMovilidad">
        <NavLink to="/chat">
          <img src={movilidadIcon} alt="movilidad" />
          <h1 className="textoStart">Movilidad</h1>
        </NavLink>
      </button>
      <button className="botonInfo">
        <img src={info} alt="info" />
      </button>
    </div>
  );
};

export default start;
