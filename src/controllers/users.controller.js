// Importa el modelo 'User' desde el archivo de modelos
import User from "../models/users.model.js";

// Controlador para crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    // Extrae 'username' y 'email' del cuerpo de la solicitud
    const { username, email } = req.body;

    // Verifica que 'username' y 'email' estén presentes
    if (!username || !email) {
      return res.status(400).send("username and email are required");
    }

    // Crea un nuevo usuario en la base de datos
    const user = await User.create({ username, email });

    // Responde con el usuario creado y un código de estado 201 (creado)
    res.status(201).json(user);
  } catch (error) {
    // Maneja cualquier error que ocurra y responde con un código de estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un usuario por su ID
export const getUserById = async (req, res) => {
  try {
    // Busca el usuario en la base de datos por ID
    const user = await User.findByPk(req.params.id);

    // Si el usuario no se encuentra, responde con un código de estado 404 (no encontrado)
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Responde con los datos del usuario
    res.json(user);
  } catch (error) {
    // Maneja cualquier error que ocurra y responde con un código de estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un usuario existente
export const updateUser = async (req, res) => {
  try {
    // Extrae 'id' de los parámetros y 'username' y 'email' del cuerpo de la solicitud
    const { id } = req.params;
    const { username, email } = req.body;

    // Actualiza el usuario en la base de datos por ID
    const [updated] = await User.update({ username, email }, { where: { id } });

    // Si la actualización fue exitosa, obtiene el usuario actualizado y responde con él
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.json(updatedUser);
    } else {
      // Si el usuario no se encuentra, responde con un código de estado 404 (no encontrado)
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    // Maneja cualquier error que ocurra y responde con un código de estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    // Extrae 'id' de los parámetros
    const { id } = req.params;

    // Elimina el usuario en la base de datos por ID
    const deleted = await User.destroy({ where: { id } });

    // Si el usuario fue eliminado, responde con un código de estado 204 (sin contenido)
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      // Si el usuario no se encuentra, responde con un código de estado 404 (no encontrado)
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    // Maneja cualquier error que ocurra y responde con un código de estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    // Obtiene todos los usuarios de la base de datos
    const users = await User.findAll();

    // Responde con la lista de usuarios
    res.json(users);
  } catch (error) {
    // Maneja cualquier error que ocurra y responde con un código de estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};
