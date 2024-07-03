import Tarea from "../Models/Tarea.js";
import { RequestsAPI } from "../RequestsAPI.js";
import {
  imprimir,
  obtenerValorInput,
  validarSesion,
  eventoClickCerrarSesion,
} from "../utils/helpers.js";

validarSesion();
eventoClickCerrarSesion();

const mostrarListaTareas = (data) => {
  imprimir("lista-error", "");
  const headerListado =
    "<tr><th>Icon</th><th>Nombre</th><th>Categoría</th></tr>";

  const listadoTareas = data
    .map((tarea) =>
      new Tarea(
        /* tarea.id, */
        tarea.icono,
        tarea.nombre,
        tarea.tipo
      ).mostrarEnLista()
    )
    .join("");

  imprimir("listado", `<table>${headerListado}${listadoTareas}</table>`);

  document.querySelectorAll(".item-lista-tarea").forEach((itemListado) => {
    itemListado.addEventListener("click", () => {
      document.location.replace(`detalle-tarea.html?id=${itemListado.id}`);
    });
  });
};

const mostrarError = (error) => {
  imprimir("lista-error", error);
};

document.querySelector("#boton-filtro").addEventListener("click", () => {
  const filtroNombre = obtenerValorInput("input-filtro-nombre");
  const filtroTipo = obtenerValorInput("input-filtro-tipo");

  RequestsAPI.getTareas({ filtroNombre, filtroTipo })
    .then(mostrarListaTareas)
    .catch(mostrarError);
});

RequestsAPI.getTareas().then(mostrarListaTareas).catch(mostrarError);
