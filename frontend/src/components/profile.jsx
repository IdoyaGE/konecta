import React, { useState, useEffect } from "react";
import {
  collection,
  getImages,
  updateImage,
  deleteImage,
  addImage,
  image,
} from "firebase/firestore";
import { db, uploadFile } from "../firebase.js";
import "../css/userProfile.scss";
const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedFile, setSelectedFile] = useState({});
  const [uploadedImages, setUploadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    location: "",
    birthYear: "",
    phone: "",
    userImage: "",
    rol: "",
  });
  const userCollectionRef = collection(db, "usuarios");
  const crearUsuario = async () => {
    if (isUserDataIncomplete()) {
      alert("Falta algún dato por completar");
      return;
    }
    try {
      const imageRef = await addImage(userCollectionRef, userData);
      setUsuarios([...usuarios, { ...userData, id: imageRef.id }]);
      resetUserData();
    } catch (error) {
      console.error("Error adding usuario: ", error);
    }
  };
  const editarUsuario = async (id) => {
    try {
      const { email, ...updatedUserData } = userData; // Eliminar el campo de correo electrónico
      await updateImage(image(userCollectionRef, id), updatedUserData);
      setEditingUserId(null);
      resetUserData();
    } catch (error) {
      console.error("Error al editar usuario: ", error);
    }
  };
  const borrarUsuario = async (id) => {
    try {
      const userimage = image(db, "usuarios", id);
      await deleteImage(userimage);
      setUsuarios((prevUsuarios) =>
        prevUsuarios.filter((usuario) => usuario.id !== id)
      );
    } catch (error) {
      console.error("Error deleting usuario: ", error);
    }
  };
  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    setSelectedFile((prevSelectedFile) => ({
      ...prevSelectedFile,
      [id]: file,
    }));
  };
  const handleUpload = async (id) => {
    if (selectedFile && selectedFile[id]) {
      const file = selectedFile[id];
      const imageUrl = await uploadFile(file);
      setUploadedImages((prevImages) => ({ ...prevImages, [id]: imageUrl }));
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };
  const handleSexoChange = (event) => {
    const { value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, sexo: value }));
  };
  const handleRolChange = (event) => {
    const { value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, rol: value }));
  };
  const handleDelete = (id) => {
    setUploadedImages((prevImages) => {
      const updatedImages = { ...prevImages };
      delete updatedImages[id];
      return updatedImages;
    });
  };
  const enterEditMode = (id) => {
    const usuario = usuarios.find((usuario) => usuario.id === id);
    setEditingUserId(id);
    setUserData(usuario);
  };
  const cancelEditMode = () => {
    setEditingUserId(null);
    resetUserData();
  };
  const resetUserData = () => {
    setUserData({
      firstName: "",
      lastName: "",
      sex: "",
      location: "",
      birthYear: "",
      phone: "",
      userImage: "",
      rol: "",
    });
  };
  const isUserDataIncomplete = () => {
    const {
      firstName,
      lastName,
      sex,
      location,
      birthYear,
      phone,
      userImage,
      rol,
    } = userData;
    return (
      !firstName ||
      !lastName ||
      !sex ||
      !location ||
      !birthYear ||
      !phone ||
      !userImage ||
      !rol
    );
  };

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        setIsLoading(true);
        const snapshot = await getImages(userCollectionRef);
        const data = snapshot.images.map((image) => ({
          ...image.data(),
          id: image.id,
        }));
        setUsuarios(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los usuarios: ", error);
        setIsLoading(false);
      }
    };
    getUsuarios();
  }, []);
  return (
    <div className='container'>
      <h1 className='perfil'>Datos de tu perfil</h1>
      <input
        firstName='nombre'
        placeholder='Nombre'
        value={userData.firstName}
        onChange={handleInputChange}
        type='text'
      />
      <input
        lastName='apellido'
        placeholder='Apellido'
        value={userData.lastName}
        onChange={handleInputChange}
        type='text'
      />
      <input
        location='localidad'
        placeholder='Localidad'
        value={userData.location}
        onChange={handleInputChange}
        type='text'
      />
      <input
        birthYear='añoNacimiento'
        placeholder='Año nacimiento'
        value={userData.birthYear}
        onChange={handleInputChange}
        type='number'
      />
      <input
        phone='movil'
        placeholder='Móvil'
        value={userData.phone}
        onChange={handleInputChange}
        type='number'
      />
      <input
        name='email'
        placeholder='Email'
        value={userData.email}
        onChange={handleInputChange}
        type='text'
        disabled={editingUserId !== null} // Deshabilitar el campo en modo de edición
      />

      <div>
        <select name='sexo' value={userData.sex} onChange={handleSexoChange}>
          <option value=''>Sexo</option>
          <option value='hombre'>Hombre</option>
          <option value='mujer'>Mujer</option>
          <option value='otros'>Otros</option>
        </select>
      </div>
      <div>
        <select name='rol' value={userData.rol} onChange={handleRolChange}>
          <option value=''>Rol</option>
          <option value='usuario'>Usuario</option>
          <option value='voluntario'>Voluntario</option>
        </select>
      </div>
      <button onClick={crearUsuario}>Guardar perfil</button>
      <div className='user-list'>
        {usuarios.map((usuario) => (
          <div className='user-item' key={usuario.id}>
            <p>Nombre: {usuario.firstName}</p>
            <p>Apellido: {usuario.lastName}</p>
            <p>Sexo: {usuario.sexo}</p>
            <p>Localidad: {usuario.location}</p>
            <p>Año de Nacimiento: {usuario.birthYear}</p>
            <p>Móvil: {usuario.phone}</p>
            <p>Email: {usuario.email}</p>
            <p>
              Rol:{" "}
              {editingUserId === usuario.id ? (
                <select
                  name='rol'
                  value={userData.rol}
                  onChange={handleRolChange}
                >
                  <option value='usuario'>Usuari@</option>
                  <option value='voluntario'>Voluntari@</option>
                </select>
              ) : (
                usuario.rol
              )}
            </p>
            <div>
              {editingUserId === usuario.id ? (
                <>
                  <label htmlFor={`file-input-${usuario.id}`}>
                    <input
                      id={`file-input-${usuario.id}`}
                      type='file'
                      onChange={(e) => handleFileChange(e, usuario.id)}
                    />
                  </label>
                  {selectedFile && selectedFile[usuario.id] && (
                    <button onClick={() => handleUpload(usuario.id)}>
                      Subir imagen
                    </button>
                  )}
                  {uploadedImages[usuario.id] && (
                    <div>
                      <img
                        src={uploadedImages[usuario.id]}
                        alt='Imagen subida'
                      />
                      <button onClick={() => handleDelete(usuario.id)}>
                        Borrar imagen
                      </button>
                    </div>
                  )}
                </>
              ) : (
                uploadedImages[usuario.id] && (
                  <img src={uploadedImages[usuario.id]} alt='Imagen subida' />
                )
              )}
            </div>
            <div>
              {editingUserId === usuario.id ? (
                <div>
                  <button
                    disabled={isUserDataIncomplete()}
                    onClick={() =>
                      editarUsuario(
                        usuario.id,
                        userData.firstName,
                        userData.lastName,
                        userData.sex,
                        userData.location,
                        userData.birthYear,
                        userData.phone,
                        userData.userImage,
                        userData.rol
                      )
                    }
                  >
                    Guardar
                  </button>
                  <button onClick={cancelEditMode}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => enterEditMode(usuario.id)}>
                    Editar
                  </button>
                  <button onClick={() => borrarUsuario(usuario.id)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
