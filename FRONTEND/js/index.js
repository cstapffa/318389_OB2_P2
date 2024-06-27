import Producto from "../Models/Producto.js";
import { RequestsAPI } from "../RequestsAPI.js";
import {
  imprimir,
  obtenerValorInput,
  validarSesion,
  eventoClickCerrarSesion,
} from "../utils/helpers.js";

validarSesion();
eventoClickCerrarSesion();

const mostrarListaProductos = (data) => {
  imprimir("lista-error", "");
  const headerListado = "<tr><th>ID</th><th>Nombre</th><th>Categoría</th></tr>";

  const listadoProductos = data
    .map((producto) =>
      new Producto(producto.id, producto.nombre, producto.tipo).mostrarEnLista()
    )
    .join("");

  imprimir("listado", `<table>${headerListado}${listadoProductos}</table>`);

  document.querySelectorAll(".item-lista-producto").forEach((itemListado) => {
    itemListado.addEventListener("click", () => {
      document.location.replace(`detalle-producto.html?id=${itemListado.id}`);
    });
  });
};

const mostrarError = (error) => {
  imprimir("lista-error", error);
};

document.querySelector("#boton-filtro").addEventListener("click", () => {
  const filtroNombre = obtenerValorInput("input-filtro-nombre");
  const filtroTipo = obtenerValorInput("input-filtro-tipo");

  RequestsAPI.getProductos({ filtroNombre, filtroTipo })
    .then(mostrarListaProductos)
    .catch(mostrarError);
});

RequestsAPI.getProductos().then(mostrarListaProductos).catch(mostrarError);
