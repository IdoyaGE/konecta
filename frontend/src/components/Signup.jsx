import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1 className='tituloRegister'> Registro </h1>
            <form className='containerRegister'>
              <div>
                <label className='labelRegister' htmlFor='email-address'>
                  Correo electrónico
                </label>
                <input
                  className='inputRegister'
                  type='email'
                  label='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Introduce aquí tu correo'
                />
              </div>

              <div>
                <label className='labelRegister' htmlFor='password'>
                  Contraseña
                </label>
                <input
                  className='inputRegister'
                  type='password'
                  label='Create password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Introduce aquí tu contraseña'
                />
              </div>

              <button
                className='botonRegister'
                type='submit'
                onClick={onSubmit}
              >
                Regístrate
              </button>
            </form>

            <p className='textoLogin'>
              ¿Ya tienes cuenta?{" "}
              <NavLink className='botonLoginR' to='/login'>
                Inicia Sesión
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
