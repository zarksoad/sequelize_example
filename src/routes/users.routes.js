// Importa el módulo 'express' para crear rutas
import express from "express";
// Importa los controladores para manejar las solicitudes relacionadas con los usuarios
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

// Crea una nueva instancia de un enrutador de Express
const UserRouter = express.Router();

// Define una ruta para crear un nuevo usuario (método POST)
UserRouter.post("/", createUser);

// Define una ruta para obtener todos los usuarios (método GET)
UserRouter.get("/", getUsers);

// Define una ruta para obtener un usuario específico por su ID (método GET)
UserRouter.get("/:id", getUserById);

// Define una ruta para actualizar un usuario específico por su ID (método PUT)
UserRouter.put("/:id", updateUser);

// Define una ruta para eliminar un usuario específico por su ID (método DELETE)
UserRouter.delete("/:id", deleteUser);

// Exporta el enrutador para que pueda ser utilizado en otros módulos
export default UserRouter;
