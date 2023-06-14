import React from "react";
import "./App.scss";
import Cookies from "universal-cookie";
import { useState } from "react";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import logo1 from "./images/Icon/Vector.png";
import logo2 from "./images/Icon/Vectora.png";
import logo3 from "./images/Icon/Vector2.png";
import logo4 from "./images/Icon/Vector3.png";
import logoAtras from "./images/Icon/back.png";
import { NavLink } from "react-router-dom";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  /* const roomInputRef = useRef(null); */

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  //Chats
  const rooms = [
    {
      name: "Tecnología",
      image: logo1,
    },
    {
      name: "Trámites y ayudas",
      image: logo2,
    },
    {
      name: "Banca",
      image: logo3,
    },
    {
      name: "Trámites médicos",
      image: logo4,
    },
  ];

  /*   if (!isAuth) {
    return (
      <div>
        <Inicio setIsAuth={setIsAuth} />
      </div>
    );
  } */

  return (
    <div>
      <Navbar />
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <h2 className="frase-app"> Trámites </h2>
          <NavLink to={"/start"}>
            <img className="bton-volver" src={logoAtras} alt="tramites" />
          </NavLink>
          <div className="room-list">
            {rooms.map((room, index) => (
              <div className="room-item" key={index}>
                <button
                  className="botonChatTa"
                  onClick={() => setRoom(room.name)}
                >
                  <img src={room.image} alt={room.name} />
                  <p>{room.name}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <div className="sign-out">
        <button onClick={signUserOut}>Salir</button>
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
