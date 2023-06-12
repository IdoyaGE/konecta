import React from "react";
/* import { signOut } from "firebase/auth";
import { auth } from "../firebase"; */
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/LogoL.png";
import "./Home.scss";

const Home = ({ user }) => {
  const navigate = useNavigate();

  /*   const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/start");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  }; */

  return (
    <>
      <nav>
        <div className="containerHome">
          <img className="logoInicio" src={logo} alt="logo" />
          <div>
            <h4>Estamos aquí para ofrecerte la ayuda que necesitas</h4>
            <h4>
              !Registrate ahora y descubre todo lo que podemos hacer port ti!
            </h4>
          </div>
          <div>
            <button className="botonHomeL" onClick={() => navigate("/signup")}>
              Registrate
            </button>
            <h4 className="textoLoginHome">
              Ya tienes una cuenta?{" "}
              <NavLink className="botonLoginRHome" to="/login">
                Iniciar Sesión
              </NavLink>
            </h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
