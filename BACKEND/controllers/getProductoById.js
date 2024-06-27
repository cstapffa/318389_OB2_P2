import { ModeloProducto } from "../database/Models/ModeloProducto.js";

export const getProductoById = (req, res, next) => {
  const idProducto = Number(req.params.id);
  console.log("parametro id",idProducto)

  ModeloProducto.findOne({ id: idProducto}) //, usuario: req.usuario.id //comento hasta tener id usuario logueado
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

