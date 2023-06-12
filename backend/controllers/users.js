const User = require("../models/users");

// Obtener todos los perfiles de usuario
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los perfiles de usuario" });
  }
};

// Crear un nuevo perfil de usuario
const createUser = async (req, res) => {
  const { firstName, lastName, sex, age, location, phone, userImage } =
    req.body;
  const newUser = new User({
    firstName,
    lastName,
    sex,
    age,
    location,
    phone,
    userImage,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el perfil de usuario" });
  }
};

// Actualizar un perfil de usuario existente
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, sex, age, location, phone, userImage } =
    req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, sex, age, location, phone, userImage },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el perfil de usuario" });
  }
};

// Eliminar un perfil de usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.json({ message: "Perfil de usuario eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar el perfil de usuario" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
