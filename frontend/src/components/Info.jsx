import React, { useState } from "react";
import info from "../images/Icon/info.png";
import tramitesIcon from "../images/Icon/tramites.png";
import movilidadIcon from "../images/Icon/movilidad.png";
import hogarIcon from "../images/Icon/hogar.png";
import Navbar from "./navbar";
import "./Info.scss";
import { NavLink } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <Navbar />
      <h1 className='textoInfo'>¿En qué podemos ayudarte?</h1>
      <div className='botonesStart'>
        <button className='botonTramites'>
          <img className='ContenidoStartI' src={tramitesIcon} alt='tramites' />
          <h1 className='textoStart'>Trámites</h1>
        </button>
        <button className='botonHogar'>
          <img className='ContenidoStartI' src={hogarIcon} alt='hogar' />
          <h1 className='textoStart'>Hogar</h1>
        </button>
        <button className='botonMovilidad'>
          <img
            className='ContenidoStartI'
            src={movilidadIcon}
            alt='movilidad'
          />
          <h1 className='textoStart'>Movilidad</h1>
        </button>
        <div>
          <button className='botonInfo'>
            <NavLink
              className='posisionStart'
              to='/start'
              style={{ textDecoration: "none" }}
            >
              <img src={info} alt='info' />
            </NavLink>
          </button>
        </div>
      </div>
      <div className='info-info'>
        <h1 className='titulo-dudas'>¿Tienes dudas?</h1>
        <button className='btn-tlf'>
          <a style={{ textDecoration: "none" }} href='tel:+34666888111'>
            Llámanos
          </a>
        </button>
        <h1 className='titulo-sug'>¿Alguna sugerencia?</h1>
        <button className='btn-sug'>
          <a style={{ textDecoration: "none" }} href='/buzon'>
            Escríbenos
          </a>
        </button>
        <br></br>
        <button className='btn-salir'>
          <NavLink to='/start' style={{ textDecoration: "none" }}>
            Salir
          </NavLink>
        </button>
      </div>
    </div>
  );
};
export default Info;
