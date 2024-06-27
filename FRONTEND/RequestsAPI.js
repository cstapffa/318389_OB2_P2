const obtenerUrl = (ruta) => `${RequestsAPI.urlBaseBackend}/${ruta}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const token = sessionStorage.getItem("session");

if (token) {
  headers.authorization = token;
}

const procesarRespuesta = (res) => {
  return res.json().then((data) => {
    if (data.error) {
      throw new Error(data?.error);
    }

    return data;
  });
};

const manejarErrores = (error = new Error("Error desconocido")) => {
  console.error("Ha ocurrido un error:", error.message);
  throw error.message;
};

export class RequestsAPI {
  static urlBaseBackend = "http://localhost:8080";

  static login(user, password) {
    const body = JSON.stringify({ user, password });

    return fetch(obtenerUrl("login"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static logout() {
    return fetch(obtenerUrl("logout"), { method: "POST", headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static register(body) {
    return fetch(obtenerUrl("registrar"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static getProductos(opciones = {}) {
    const queryParams = new URLSearchParams({});

    if (opciones.filtroNombre) {
      queryParams.set("nombre", opciones.filtroNombre);
    }

    if (opciones.filtroTipo) {
      queryParams.set("tipo", opciones.filtroTipo);
    }

    return fetch(obtenerUrl("products?" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static getProductos(idProducto) {
    return fetch(obtenerUrl(`product/${idProducto}`), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static postProducto(body) {
    return fetch(obtenerUrl("product"), { method: "POST", headers, body })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static putProducto(idProducto, nombre, tipo) {
    const body = JSON.stringify({ nombre, tipo });
    return fetch(obtenerUrl(`product/${idProducto}`), {
      method: "PUT",
      headers,
      body,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  static deleteProducto(idProducto) {
    return fetch(obtenerUrl(`product/${idProducto}`), {
      method: "DELETE",
      headers,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }
}
