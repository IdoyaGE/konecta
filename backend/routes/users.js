import express from "express";
import multer from "multer";
import User from "../models/users.js";

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
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: `Error: ${err}` }));
});

// Crear un nuevo usuario
router.post("/add", upload.single("userImage"), (req, res) => {
  const newUser = new User({
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
    .then(() => res.status(201).json("El usuario ha sido registrado con éxito"))
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
});

// Actualizar un usuario existente
router.put("/update/:id", upload.single("userImage"), (req, res) => {
  User.findById(req.params.id)
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
        .then(() => res.json("El usuario ha sido actualizado con éxito"))
        .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
    })
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
});

// Borrar un usuario existente
router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Usuario eliminado correctamente"))
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
});

export default router;
