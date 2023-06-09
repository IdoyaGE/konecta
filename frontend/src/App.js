import React from "react";
import "./App.css";
import Cookies from "universal-cookie";
import { useState } from "react";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./inicio";
import Navbar from "./components/navbar";
import UserProfile from "./components/userProfile";

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
      name: "Teconología",
    },
    {
      name: "Tramites y ayudas",
    },
    {
      name: "Banca",
    },
    {
      name: "Tramites médicos",
    },

    {
      name: "Compras",
    },
    {
      name: "Pequeñas reparaciones",
    },
    {
      name: "Nutrición y alimentacion",
    },
    {
      name: "Transporte",
    },
    {
      name: "Ocio",
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
      <UserProfile />
      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
          <h2>¿En qué te podemos ayudar? </h2>
          <div className='room-list'>
            {rooms.map((room, index) => (
              <div className='room-item' key={index}>
                <button
                  className='buttonroom'
                  onClick={() => setRoom(room.name)}
                >
                  {room.name}
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