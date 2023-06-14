import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Formulario.scss";

const Buzon = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          categoria: "",
          sugerencia: "",
        }}
        validate={(valores) => {
          let errores = {};
          // Validacion sugerencia
          if (!valores.sugerencia) {
            errores.sugerencia = "Por favor introduce tu queja o sugerencia";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,300}$/.test(valores.localidad)) {
            errores.localidad =
              "El apellido solo puede contener máximo 300 letras y espacios";
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
            <div>
              <label>
                <Field type='radio' name='categoria' value='tramites' />{" "}
                Trámites
              </label>
              <label>
                <Field type='radio' name='categoria' value='hogar' /> Hogar
              </label>
              <label>
                <Field type='radio' name='categoria' value='movilidad' />{" "}
                Movilidad
              </label>
            </div>
            <div>
              <label htmlFor='sugerencia'>Escribe tu queja o sugerencia:</label>
              <Field
                type='text'
                id='sugerencia'
                name='sugerencia'
                placeholder='Queja o sugerencia'
              />
              <ErrorMessage
                name='sugerencia'
                component={() => (
                  <div className='error'>{errors.sugerencia}</div>
                )}
              />
            </div>

            <button type='submit'>Enviar</button>
            {formularioEnviado && (
              <p className='exito'>Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Buzon;
