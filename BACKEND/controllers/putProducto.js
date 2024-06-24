import { ModeloProducto } from "../database/Models/ModeloProducto.js";

export const putProducto = (req, res, next) => {
  const idProducto = req.params.id;
  const { name, type } = req.body;
  const datosNuevos = {};
  if (name) datosNuevos.name = name;
  if (type) datosNuevos.type = type;

  ModeloProducto.updateOne({ id: idProducto }, datosNuevos)
    .then((data) => {
      if (data.matchedCount === 0) {
        throw new Error(`No exite producto con el ID ${idProducto}`);
      }
      res.json({
        message: `Producto con id ${idProducto} modificado con éxito`,
      });
    })
    .catch((error) => {
      next(error);
    });
};
