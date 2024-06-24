import { ModeloProducto } from "../database/Models/ModeloProducto.js";

export const getProductoByType = (req, res, next) => {
  const idProducto = req.params.type;

  ModeloProducto.findOne({ type: typeProducto, usuario: req.usuario.id })
    .then((data) => {
      if (!data) {
        throw new Error(`No existe ningún producto con el Id ${idProducto}`);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
