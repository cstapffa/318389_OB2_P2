import { ModeloUsuario } from "../database/Models/ModeloUsuario.js";

export const putUsuario = (req, res, next) => {
  const idUsuario = req.params.id;
  const { name, user, email, password } = req.body;

  const datosNuevos = {};
  if (name) datosNuevos.name = name;
  if (user) datosNuevos.user= user;
  if(email) datosNuevos.email=email;
  if (password) datosNuevos.password=password;
  

  ModeloUsuario.updateOne({ id: idUsuario }, datosNuevos)
    .then((data) => {
      if (data.matchedCount === 0) {
        throw new Error(`No exite usuario con el ID ${idUsuario}`);
      }
      res.json({
        message: `Usuario con id ${idUsuario} modificado con éxito`,
      });
    })
    .catch((error) => {
      next(error);
    });
};
