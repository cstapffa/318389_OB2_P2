import { ModeloUsuario } from "../database/Models/ModeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postUsuario = async (req, res, next) => {
  const { name, user, email, password } = req.body;

  try {
    const usuarioExistente = await ModeloUsuario.findOne({ user: user });

    if (usuarioExistente) {
      throw new Error("El email ya está en uso");
    }

    const NuevoUsuario = new ModeloUsuario();
    NuevoUsuario.id = await obtenerProximoId(ModeloUsuario);
    NuevoUsuario.name = name;
    NuevoUsuario.user = user;
    NuevoUsuario.email = email;
    NuevoUsuario.password = password;

    NuevoUsuario.save()
      .then(() => {
        res.json({
          message: `Nuevo usuario con id ${NuevoUsuario.id} creado con éxito.`,
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};
