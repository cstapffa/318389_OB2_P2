import { ModeloUsuario } from "../database/Models/ModeloUsuario.js";

export const getUsuarios = (req, res, next) => {
  ModeloUsuario.find()
    .then((data) => {
      console.log("get usuario => ", data);
      if (data.length === 0) {
        res.send("No hay usuarios");
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};