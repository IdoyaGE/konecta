import { Field, Form, Formik, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        sex: "",
        location: "",
        birthYear: "",
        phone: "",
        role: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.firstName) {
          errors.firstName = "Este campo es obligatorio";
        }
        if (!values.lastName) {
          errors.lastName = "Este campo es obligatorio";
        }
        if (!values.email) {
          errors.email = "Este campo es obligatorio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "El correo no es válido";
        }
        if (!values.sex) {
          errors.sex = "Este campo es obligatorio";
        }
        if (!values.location) {
          errors.location = "Este campo es obligatorio";
        }
        if (!values.birthYear) {
          errors.birthYear = "Este campo es obligatorio";
        }
        if (!values.phone) {
          errors.phone = "Este campo es obligatorio";
        }
        if (!values.role) {
          errors.role = "Este campo es obligatorio";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        localStorage.setItem("formulario", JSON.stringify(values));
        toast.success("Registro enviado");
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div className='formulario'>
            <h1> Completa tu perfil</h1>
            <div>
              <label htmlFor='firstName'>Nombre</label>
              <Field autoComplete='off' type='text' name='firstName' />
              <ErrorMessage name='firstName' component='p' />
            </div>
            <div>
              <label htmlFor='lastName'>Apellido</label>
              <Field autoComplete='off' type='text' name='lastName' />
              <ErrorMessage name='lastName' component='p' />
            </div>
            <div>
              <label htmlFor='email'>Correo Electrónico</label>
              <Field autoComplete='off' type='email' name='email' />
              <ErrorMessage name='email' component='p' />
            </div>
            <div>
              <label htmlFor='sex'>Sexo</label>
              <Field as='select' name='sex'>
                <option value=''>Seleccionar</option>
                <option value='hombre'>Hombre</option>
                <option value='mujer'>Mujer</option>
                <option value='otros'>Otros</option>
              </Field>
              <ErrorMessage name='sex' component='p' />
            </div>
            <div>
              <label htmlFor='location'>Localidad</label>
              <Field autoComplete='off' type='text' name='location' />
              <ErrorMessage name='location' component='p' />
            </div>
            <div>
              <label htmlFor='birthYear'>Año de nacimiento</label>
              <Field autoComplete='off' type='text' name='birthYear' />
              <ErrorMessage name='birthYear' component='p' />
            </div>
            <div>
              <label htmlFor='phone'>Móvil</label>
              <Field autoComplete='off' type='text' name='phone' />
              <ErrorMessage name='phone' component='p' />
            </div>
            <div>
              <label htmlFor='role'>Rol</label>
              <Field as='select' name='role'>
                <option value=''>Seleccionar</option>
                <option value='usuario'>Usuari@</option>
                <option value='voluntario'>Voluntari@</option>
              </Field>
              <ErrorMessage name='role' component='p' />
            </div>

            <div>
              <label htmlFor='image'>Imagen</label>
              <Field type='file' name='image' />
            </div>

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AppForm;
