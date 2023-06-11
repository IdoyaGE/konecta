import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "../images/LogoL.png";
import "./Auth.scss";
import "./Home.scss";

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/start");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <div className="container">
          <img className="logoInicio" src={logo} alt="logo" />
          <h3 className="answer">¿Necesitas ayuda?</h3>
          <div>
            <p>
              Conecta con voluntarios que te ayudarán a resolver tus dudas
              Pueden ayudarte con los recados o simplemente a escucharte
            </p>
            <h1>No estás sol@, entre todos nos ayudamos</h1>
            <p>
              Apoyo mutuo y preguntas sin temor a ser juzgad@, sintiéndonos
              valorados y respetados
            </p>
          </div>
          <div>
            {user ? (
              <button className="botonHomeL" onClick={handleLogout}>
                Salir
              </button>
            ) : (
              <button className="botonHomeL" onClick={() => navigate("/login")}>
                Entrar
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
