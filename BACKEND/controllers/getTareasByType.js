import { ModeloTarea } from "../database/Models/ModeloTarea.js";

export const getTareasByType = (req, res, next) => {
  const tipoTarea = req.params.tipo;

  ModeloTarea.find({ categoria: tipoTarea, logueado: req.usuario.id })
    .then((data) => {
      if (!data) {
        throw new Error(`No existe ninguna tarea del tipo ${tipoTarea}`);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
