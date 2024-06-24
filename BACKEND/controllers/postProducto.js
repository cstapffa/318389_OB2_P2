import { ModeloProducto } from "../database/Models/ModeloProducto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postProducto = async (req, res, next) => {
  const { name, type } = req.body;

  const nuevoProducto = new ModeloProducto();
  nuevoProducto.id = await obtenerProximoId(ModeloProducto);
  nuevoProducto.name = name;
  nuevoProducto.type = type;

  nuevoProducto.usuario = req.usuario.id;

  nuevoProducto
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
};
