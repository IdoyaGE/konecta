const express = require("express");
const router = express.Router();
const multer = require("multer");
const Users = require("../models/users");

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
    .then((user) => res.json(user))
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
    .then(() => res.json(" Ya estás registrado"))
    .catch((err) => res.status(400).json(`"Error: ${err}`));
});

// Actualizar un usuario existente
router.put("/update/:id", upload.single("userName"), (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      (user.firstName = req.body.firstName),
        (user.lastName = req.body.lastName),
        (user.sex = req.body.sex),
        (user.age = req.body.age),
        (user.location = req.body.location),
        (user.phone = req.body.phone),
        (user.userImage = req.file.originalname),
        user
          .save()
          .then(() => res.json("Ya está actualizado"))
          .catch((err) => res.status(400).json(`"Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`"Error: ${err}`));
});

// Borrar un usuario existente
router.delete("/delete/:id", (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => res.json("Usuario eliminado correctamente"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
