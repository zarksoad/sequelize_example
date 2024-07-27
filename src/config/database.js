import { Sequelize } from "sequelize";

// Crea una nueva instancia de Sequelize para conectar a la base de datos
const sequelize = new Sequelize("logistic", "root", "1234", {
  // Especifica el nombre del host del servidor de base de datos
  host: "localhost", // Nota: La clave correcta es 'host', no 'localhost'
  // Define el dialecto de la base de datos que se está utilizando
  dialect: "mysql", // En este caso, estamos usando MySQL
});

// Exporta la instancia de Sequelize para que pueda ser utilizada en otros módulos
export default sequelize;
