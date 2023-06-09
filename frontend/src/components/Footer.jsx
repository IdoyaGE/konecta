//Importo React, las imágenes y el estilo CSS
import React from "react";
import img7 from "../images/fb.png";
import img8 from "../images/inst.png";
import img10 from "../images/tw.png";
import "./Footer.css";
import logoBizkaia from "../images/Icon/Ellipse 15.png";
import logoEuro from "../images/Icon/Ellipse 19.png";
import logoBBK from "../images/Icon/bbkbootcamp.png";

//Variable footer que devuelve el menú, suscripción a la newsletter y links a las redes sociales

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='redessociales'>
          <img
            className='logoBiz'
            src={logoBizkaia}
            alt='logo bizkaia'
            width='145px'
            height='auto'
          />
          <img
            className='logoEuro'
            src={logoEuro}
            alt='logo euro'
            width='75px'
            height='auto'
          />
          <img
            className='logoBBK'
            src={logoBBK}
            alt='logo bbk'
            width='180px'
            height='auto'
          />
          <p className='copy'>&copy; 2023 2konekta</p>
          <p className='email'>Email: info@2konekta.com</p>
          <ul class='list-unstyled d-flexiconosredes'>
            <li class='facebook'>
              <img
                src={img7}
                id='iconos'
                alt='Logo facebook'
                width='75px'
                height='75px'
              />
            </li>
            <li class='instagram'>
              <img
                src={img8}
                id='iconos'
                alt='Logo instagram'
                width='75px'
                height='75px'
              />
            </li>
            <li class='twitter'>
              <img
                src={img10}
                id='iconos'
                alt='Logo twitter'
                width='75px'
                height='75px'
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
