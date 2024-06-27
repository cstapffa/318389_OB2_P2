import {
  validarSesion,
  obtenerValorInput,
  imprimir,
} from "../utils/helpers.js";
import { RequestsAPI } from "../RequestsAPI.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

const mostrarError = (error) => {
  imprimir("editar-producto-error", error);
};

const popularCampos = (data) => {
  document.querySelector("#editar-nombre").value = data.nombre;
  document.querySelector("#editar-tipo").value = data.tipo;
};

RequestsAPI.getProducto(idProducto)
  .then(popularCampos)
  .catch((error) => {
    mostrarError(error);
  });

document
  .querySelector("#boton-actualizar-producto")
  .addEventListener("click", () => {
    const nombre = obtenerValorInput("editar-nombre");
    const tipo = obtenerValorInput("editar-tipo");

    if (!nombre || !tipo) {
      imprimir("editar-producto-error", "Por favor complete todos los campos");
      return;
    }

    RequestsAPI.putProducto(idProducto, nombre, tipo)
      .then(() => {
        document.location.replace(`detalle-producto.html?id=${idProducto}`);
      })
      .catch((error) => {
        imprimir("editar-producto-error", error);
      });
  });
