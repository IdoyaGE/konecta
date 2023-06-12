import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/start");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1 className='tituloLogin'>¿Quieres iniciar sesión?</h1>

            <form>
              <div className='containerLogin'>
                <label className='labelLogin' htmlFor='email-address'>
                  Dirección de email
                </label>
                <input
                  className='inputLogin'
                  id='email-address'
                  name='email'
                  type='email'
                  required
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className='labelLogin' htmlFor='password'>
                  Password
                </label>
                <input
                  className='inputLogin'
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button className='botonLogin' onClick={onLogin}>
                  Login
                </button>
              </div>
            </form>

            <p className='textoRegister'>
              ¿No tienes cuenta?{" "}
              <NavLink className='botonRegisterL' to='/signup'>
                Regístrate
              </NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
