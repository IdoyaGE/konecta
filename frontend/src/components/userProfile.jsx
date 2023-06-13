import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import "./userProfile.scss";

const UserProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [userImage, setUserImage] = useState("");

  const onChangeFile = (e) => {
    setUserImage(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("sex", sex);
    formData.append("age", age);
    formData.append("location", location);
    formData.append("phone", phone);
    formData.append("userImage", userImage);

    setFirstName("");
    setLastName("");
    setSex("");
    setAge("");
    setLocation("");
    setPhone("");
    setUserImage("");

    axios
      .post("/add", formData)
      .then(function (response) {
        if (response.status === 200) {
          alert("Registrado correctamente");
          document.getElementById("userProfile").reset(); // Limpiar el formulario
        } else {
          throw new Error("Error al meter tus datos");
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Error al meter tus datos. Inténtalo de nuevo.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Datos de tu perfil</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sexo</label>
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="form-control"
              placeholder="Sexo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Edad</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Edad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Localidad</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="Localidad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Sube tu foto</label>
            <input
              type="file"
              name="userImage"
              className="form-control"
              onChange={onChangeFile}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
