import React from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import room1 from "./images/bak.png";
import room2 from "./images/ayudas.jpg";
import room3 from "./images/banco.jpg";
import room4 from "./images/compras.jpg";
import room5 from "./images/reparaciones.jpg";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  //Chats
  const rooms = [
    {
      name: "Lactancia y nutrición",
      image: room1,
    },
    {
      name: "Juegos y actividades",
      image: room2,
    },
    {
      name: "Seguridad en el hogar",
      image: room3,
    },
    {
      name: "Ejercicios postparto",
      image: room4,
    },

    {
      name: "Productos",
      image: room5,
    },
  ];

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {/* <nav>
        <div className='navbar-logo'>
          <imagen src={momplanet} alt='Logo' />
        </div>
        <ul className='navbar-links'>
          <li>
            <a href='./components/Aboutus'>Sobre nosotros</a>
          </li>
          <li>
            <a href='./components/Blog'>Blog</a>
          </li>
        </ul>
      </nav> */}

      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
          <h2>¿De qué te gustaría hablar? </h2>
          <div className='room-list'>
            {rooms.map((room, index) => (
              <div className='room-item' key={index}>
                <img src={room.image} alt={room.name} />
                <button
                  className='buttonroom'
                  onClick={() => setRoom(room.name)}
                >
                  Chat {room.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut}>Salir</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
