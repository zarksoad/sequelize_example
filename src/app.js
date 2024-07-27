// Importa el módulo 'express' para crear la aplicación
import express from "express";
// Importa el enrutador principal definido en 'routes/Router.js'
import router from "./routes/Router.js";
// Importa la instancia de Sequelize desde la configuración
import sequelize from "./config/database.js";

// Crea una nueva instancia de la aplicación Express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Usa el enrutador principal para manejar las rutas de la aplicación
app.use(router);

// Inicia el servidor en el puerto 3000
app.listen(3000, async () => {
  try {
    // Intenta autenticar la conexión a la base de datos
    await sequelize.authenticate();
    console.log("Database connected.");

    // Sincroniza los modelos definidos con la base de datos
    await sequelize.sync(); // Synchronize models
    console.log("Server running on http://localhost:3000");
  } catch (error) {
    // Si ocurre un error al conectar con la base de datos, lo muestra en la consola
    console.error("Unable to connect to the database:", error);
  }
});
