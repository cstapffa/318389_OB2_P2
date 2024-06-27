import { RequestsAPI } from "../RequestsAPI.js";
import {
  imprimir,
  obtenerValorInput,
  validarSesion,
} from "../utils/helpers.js";

validarSesion();

document.querySelector("#boton-nuevo-producto").addEventListener("click", () => {
  const nombre = obtenerValorInput("nuevo-nombre");
  const tipo = obtenerValorInput("nuevo-tipo");

 if (!nombre || !tipo) {
    imprimir("nuevo-producto-error", "Por favor complete todos los campos");
    return;
  }
  
  const body = JSON.stringify({ nombre, tipo});
  
  RequestsAPI.postProducto(body)
    .then(() => {
      document.location.replace("index.html");
    })
    .catch((error) => {
      imprimir("nuevo-producto-error", error);
    });
});
