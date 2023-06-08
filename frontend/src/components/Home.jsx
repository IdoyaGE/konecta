import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "../images/konectatu.png";
import "./Auth.css";

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
          <img className="logo" src={logo} alt="logo" />
          <h3>¿Necesitas ayuda?</h3>
          <div>
            <p>
              Conecta con voluntarios que te ayudarán a resolver tus dudas,
              ayudarte con los recados, o simplemente a escucharte
            </p>
            <h1>No estás sol@, entre todos nos ayudamos</h1>
            <p>
              Apoyo mutuo y preguntas sin temor a ser juzgad@, sintiéndonos
              valorados y respetados
            </p>
          </div>
          <div>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
