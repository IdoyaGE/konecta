import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Start from "./components/start";
import Tramites from "./AppTramites";
import Hogar from "./AppHogar";
import Movilidad from "./AppMovilidad";
import Perfil from "./components/Formulario";
import Notificaciones from "./components/Notificaciones";
import Info from "./components/Info";

function Inicio() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {"/"}
            <Route path="/" element={<Home user={user} />} />
            <Route path="/start" element={<Start user={user} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tramites" element={<Tramites />} />
            <Route path="/hogar" element={<Hogar />} />
            <Route path="/movilidad" element={<Movilidad />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default Inicio;
