import { ModeloProducto } from "../database/Models/ModeloProducto.js";

export const getProductoByType = (req, res, next) => {
  const typeProducto = req.params.type;

  ModeloProducto.findOne({ type: typeProducto})  //, usuario: req.usuario.id //comento hasta tener id usuario logueado
    .then((data) => {
      if (!data) {
        throw new Error(`No existe ningún producto del Tipo ${typeProducto}`);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
