import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Formulario.scss";
import Navbar from "./navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import logoAtras from "../images/Icon/back.png";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Navbar />
      <h1 className='titulo-userProfile'>Perfil</h1>
      <NavLink to={"/start"}>
        <img className='bton-volver-fo' src={logoAtras} alt='tramites' />
      </NavLink>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          localidad: "",
          nacimiento: "",
          telefono: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor introduce tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          // Validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor introduce tu primer apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.nombre =
              "El apellido solo puede contener letras y espacios";
          }
          // Validacion localidad
          if (!valores.localidad) {
            errores.localidad = "Por favor introduce tu localidad";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.localidad)) {
            errores.localidad =
              "El apellido solo puede contener letras y espacios";
          }
          //Validación año de nacimiento
          if (!valores.nacimiento) {
            errores.nacimiento = "Por favor introduce tu año de nacimiento";
          } else if (!/^\d{4}$/.test(valores.nacimiento)) {
            errores.nacimiento = "El año de nacimiento debe tener 4 números";
          }
          //Validación teléfono
          if (!valores.telefono) {
            errores.telefono = "Por favor introduce tu móvil";
          } else if (!/^\d{9}$/.test(valores.telefono)) {
            errores.telefono =
              "El número de teléfono debe tener 9 dígitos numéricos";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className='formulario'>
            <div className='form-group'>
              <label className='text-form' htmlFor='nombre'>
                Nombre
              </label>
              <Field
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Nombre'
                className='form-control'
              />
              <ErrorMessage
                name='nombre'
                component={() => <div className='error'>{errors.nombre}</div>}
              />
            </div>
            <div className='form-group'>
              <label className='text-form' htmlFor='Apellido'>
                Apellido
              </label>
              <Field
                type='text'
                id='apellido'
                name='apellido'
                placeholder='apellido'
                className='form-control'
              />
              <ErrorMessage
                name='apellido'
                component={() => <div className='error'>{errors.apellido}</div>}
              />
            </div>
            <div className='form-group'>
              <label className='text-form' htmlFor='localidad'>
                Localidad
              </label>
              <Field
                type='text'
                id='localidad'
                name='localidad'
                placeholder='Localidad'
                className='form-control'
              />
              <ErrorMessage
                name='localidad'
                component={() => (
                  <div className='error'>{errors.localidad}</div>
                )}
              />
            </div>
            <div className='form-group'>
              <label className='text-form' htmlFor='nacimiento'>
                Año de nacimiento
              </label>
              <Field
                type='text'
                id='nacimiento'
                name='nacimiento'
                placeholder='Año de nacimiento'
                className='form-control'
              />
              <ErrorMessage
                name='nacimiento'
                component={() => (
                  <div className='error'>{errors.nacimiento}</div>
                )}
              />
            </div>
            <div className='form-group'>
              <label className='text-form' htmlFor='telefono'>
                Móvil
              </label>
              <Field
                type='text'
                id='telefono'
                name='telefono'
                placeholder='Móvil'
                className='form-control'
              />
              <ErrorMessage
                name='telefono'
                component={() => <div className='error'>{errors.telefono}</div>}
              />
            </div>
            <div className='form-group'>
              <label className='text-form' htmlFor='sexo'>
                Sexo
              </label>
              <div className='form-control'>
                <label>
                  <Field type='radio' name='sexo' value='hombre' /> Hombre
                </label>
                <label>
                  <Field type='radio' name='sexo' value='mujer' /> Mujer
                </label>
                <label>
                  <Field type='radio' name='sexo' value='otros' /> Otros
                </label>
              </div>
            </div>

            <button className='btn-userProfile' type='submit'>
              Enviar
            </button>
            {formularioEnviado && (
              <p className='exito'>Formulario enviado con éxito!</p>
            )}
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
};

export default Formulario;
