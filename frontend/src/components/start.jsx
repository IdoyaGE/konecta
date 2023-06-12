import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import info from "../images/Icon/info.png";
import tramitesIcon from "../images/Icon/tramites.png";
import movilidadIcon from "../images/Icon/movilidad.png";
import hogarIcon from "../images/Icon/hogar.png";
import Info from "./Info";
import "./start.scss";
import { useState } from "react";

const Start = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <h3>¿En qué podemos ayudarte?</h3>
      <div className="botonesStart">
        <button className="botonTramites">
          <NavLink className="ContenidoStart" to="/tramites">
            <img
              className="ContenidoStartI"
              src={tramitesIcon}
              alt="tramites"
            />
            <h1 className="textoStart">Trámites</h1>
          </NavLink>
        </button>
        <button className="botonHogar">
          <NavLink to="/hogar">
            <img className="ContenidoStartI" src={hogarIcon} alt="hogar" />
            <h1 className="textoStart">Hogar</h1>
          </NavLink>
        </button>
        <button className="botonMovilidad">
          <NavLink to="/movilidad">
            <img
              className="ContenidoStartI"
              src={movilidadIcon}
              alt="movilidad"
            />
            <h1 className="textoStart">Movilidad</h1>
          </NavLink>
        </button>
        <button className="botonInfo">
          <NavLink to="/info">
            <img src={info} alt="info" />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Start;
