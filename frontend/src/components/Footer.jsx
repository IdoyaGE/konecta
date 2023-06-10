//Importo React, las imágenes y el estilo CSS
import React from "react";
import img7 from "../images/fb.jpg";
import img8 from "../images/inst.jpg";
import img10 from "../images/tw.jpg";
import "./Footer.css";
import logoBizkaia from "../images/Icon/Ellipse 15.png";
import logoEuro from "../images/Icon/Ellipse 19.png";

//Variable footer que devuelve el menú, suscripción a la newsletter y links a las redes sociales

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="redessociales">
          <img
            src={logoBizkaia}
            alt="logo bizkaia"
            width="75px"
            height="75px"
          />
          <img src={logoEuro} alt="logo euro" width="75px" height="75px" />
          <p className="copy">&copy; 2023 konecta2</p>
          <p className="email">Email: info@konecta2.com</p>

          <ul class="list-unstyled d-flexiconosredes">
            <li class="facebook">
              <img
                src={img7}
                id="iconos"
                alt="Logo facebook"
                width="75px"
                height="75px"
              />
            </li>
            <li class="instagram">
              <img
                src={img8}
                id="iconos"
                alt="Logo instagram"
                width="75px"
                height="75px"
              />
            </li>
            <li class="twitter">
              <img
                src={img10}
                id="iconos"
                alt="Logo twitter"
                width="75px"
                height="75px"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
