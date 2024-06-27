import {
  validarSesion,
  obtenerValorInput,
  imprimir,
} from "../utils/helpers.js";
import { RequestsAPI } from "../RequestsAPI.js";

validarSesion();

document
  .querySelector("#boton-register-submit")
  .addEventListener("click", () => {
    const nombre = obtenerValorInput("form-register-nombre");
    const user = obtenerValorInput("form-register-user");
    const password = obtenerValorInput("form-register-password");

    if (!nombre || !user || !password) {
      imprimir("form-register-error", "Por favor complete todos los campos");
      return;
    }

    const body = JSON.stringify({ nombre, user, password });
    
    RequestsAPI.register(body)
      .then(() => {
        document.location.replace("login.html");
      })
      .catch((error) => {
        imprimir("form-register-error", error);
      });
  });
