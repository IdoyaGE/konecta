const express = require("express");
const router = express.Router();
const userController = require("../controllers/userProfile");

// Obtener todos los perfiles de usuario
router.get("/", userController.getAllUsers);

// Crear un nuevo perfil de usuario
router.post("/", userController.createUser);

// Actualizar un perfil de usuario existente
router.put("/:id", userController.updateUser);

// Eliminar un perfil de usuario
router.delete("/:id", userController.deleteUser);

module.exports = router;
