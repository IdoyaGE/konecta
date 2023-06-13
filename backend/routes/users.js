import express from "express";
import multer from "multer";
import Users from "../models/users.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./frontend/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Obtener todos los usuarios
router.get("/perfil", (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Crear un nuevo usuario
router.post("/add", upload.single("userImage"), (req, res) => {
  const newUser = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sex: req.body.sex,
    age: req.body.age,
    location: req.body.location,
    phone: req.body.phone,
    userImage: req.file.originalname,
  });
  newUser
    .save()
    .then(() => res.json("El usuario ya está registrado"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Actualizar un usuario existente
router.put("/update/:id", upload.single("userImage"), (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.sex = req.body.sex;
      user.age = req.body.age;
      user.location = req.body.location;
      user.phone = req.body.phone;
      user.userImage = req.file.originalname;

      user
        .save()
        .then(() => res.json("El usuario ya está actualizado"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Borrar un usuario existente
router.delete("/delete/:id", (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => res.json("Usuario eliminado correctamente"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

export default Users;
