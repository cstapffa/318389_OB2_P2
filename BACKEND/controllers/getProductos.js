import { ModeloProducto } from "../database/Models/ModeloProducto.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getProductos = (req, res, next) => {
  const filtroNombre = formatearFiltrosDB(req.query.name);
  const filtroTipo = formatearFiltrosDB(req.query.type);

  const filtros = { usuario: req.usuario.id };
  if (filtroNombre) filtros.name = filtroNombre;
  if (filtroTipo) filtros.type = filtroTipo;

  ModeloProducto.find(filtros)
    .then((data) => {
      console.log("get productos =>", data);
      if (data.length === 0) {
        res.json([]);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
