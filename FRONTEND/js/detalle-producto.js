import Producto from "../Models/Producto.js";
import { RequestsAPI } from "../RequestsAPI.js";
import { imprimir, validarSesion } from "../utils/helpers.js";

validarSesion();

const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

const mostrarError = (error) => {
  imprimir("detalle-error", error);
};

const mostrarDetalle = (data) => {
  const producto = new Producto(data.id, data.nombre, data.tipo);
  imprimir("detalle", producto.mostrarDetalle());
};

document
  .querySelector("#boton-editar-producto")
  .addEventListener("click", () => {
    document.location.replace(`editar-producto.html?id=${idProducto}`);
  });

document
  .querySelector("#boton-eliminar-producto")
  .addEventListener("click", () => {
    RequestsAPI.deleteProducto(idProducto)
      .then(() => {
        document.location.replace("index.html");
      })
      .catch((error) => {
        mostrarError(error);
      });
  });

RequestsAPI.getProducto(idProducto)
  .then(mostrarDetalle)
  .catch((error) => {
    mostrarError(error);
  });
