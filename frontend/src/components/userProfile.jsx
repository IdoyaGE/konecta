import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    age: "",
    location: "",
    phone: "",
    picture: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", newUser.firstName);
      formData.append("lastName", newUser.lastName);
      formData.append("sex", newUser.sex);
      formData.append("age", newUser.age);
      formData.append("location", newUser.location);
      formData.append("phone", newUser.phone);
      formData.append("picture", newUser.picture);

      await axios.post("/api/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      getUsers();
      setNewUser({
        firstName: "",
        lastName: "",
        sex: "",
        age: "",
        location: "",
        phone: "",
        picture: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleInputChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
          placeholder="Apellido"
          required
        />
        <input
          type="text"
          name="sex"
          value={newUser.sex}
          onChange={handleInputChange}
          placeholder="Sexo"
          required
        />
        <input
          type="number"
          name="age"
          value={newUser.age}
          onChange={handleInputChange}
          placeholder="Edad"
          required
        />
        <input
          type="text"
          name="location"
          value={newUser.location}
          onChange={handleInputChange}
          placeholder="Localidad"
          required
        />
        <input
          type="text"
          name="phone"
          value={newUser.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
          required
        />
        <input
          type="file"
          name="picture"
          onChange={(e) =>
            setNewUser({ ...newUser, picture: e.target.files[0] })
          }
          accept="image/*"
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <div>
              <strong>Nombre y Apellido: </strong>
              {user.firstName} {user.lastName}
            </div>
            <div>
              <strong>Sexo: </strong>
              {user.sex}
            </div>
            <div>
              <strong>Edad: </strong>
              {user.age}
            </div>
            <div>
              <strong>Localidad: </strong>
              {user.location}
            </div>
            <div>
              <strong>Teléfono: </strong>
              {user.phone}
            </div>
            {user.picture && (
              <div>
                <strong>Imagen: </strong>
                <img src={user.picture} alt="User Profile" />
              </div>
            )}
            <button onClick={() => handleDelete(user._id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
