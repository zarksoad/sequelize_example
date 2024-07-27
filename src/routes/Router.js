// Importa la función 'Router' del módulo 'express' para crear un enrutador
import { Router } from "express";
// Importa el enrutador de usuarios definido en 'usersRoutes.js'
import UserRouter from "./users.routes.js";

// Crea una nueva instancia de un enrutador
const router = Router();

// Usa el enrutador de usuarios para manejar rutas que comienzan con '/users'
router.use("/users", UserRouter);

// Exporta el enrutador principal para que pueda ser utilizado en otros módulos
export default router;
