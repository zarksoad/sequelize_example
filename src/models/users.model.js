// Importa el tipo de datos 'DataTypes' desde el paquete 'sequelize'
import { DataTypes } from "sequelize";
// Importa la instancia de Sequelize desde la configuración
import sequelize from "../config/database.js";

// Define un nuevo modelo 'User' con Sequelize
const User = sequelize.define(
  "User", // Nombre del modelo
  {
    // Definición de los atributos del modelo
    id: {
      type: DataTypes.INTEGER, // Tipo de dato para el atributo 'id'
      autoIncrement: true, // El valor de 'id' se incrementará automáticamente
      primaryKey: true, // 'id' es la clave primaria del modelo
    },
    username: {
      type: DataTypes.STRING, // Tipo de dato para el atributo 'username'
      allowNull: false, // El atributo 'username' no puede ser nulo
      unique: true, // El valor de 'username' debe ser único
    },
    email: {
      type: DataTypes.STRING, // Tipo de dato para el atributo 'email'
      allowNull: false, // El atributo 'email' no puede ser nulo
      unique: true, // El valor de 'email' debe ser único
    },
  },
  {
    // Configuración adicional del modelo
    timestamps: false, // Desactiva el uso automático de los campos 'createdAt' y 'updatedAt'
  }
);

// Exporta el modelo 'User' para que pueda ser utilizado en otros módulos
export default User;
