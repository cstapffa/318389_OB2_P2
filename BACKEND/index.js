import express from "express";
import cors from "cors";
import "dotenv/config";
import { conectarDB } from "./database/conexion.js";
import { getProductos } from "./controllers/getProductos.js";
import { getProductoById } from "./controllers/getProductoById.js";
import { getProductoByType } from "./controllers/getProductoByType.js";
import { postProducto } from "./controllers/postProducto.js";
import { putProducto } from "./controllers/putProducto.js";
import { deleteProducto } from "./controllers/deleteProducto.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { getUsuarios } from "./controllers/getUsuarios.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";

// const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

await conectarDB(); /* espera a que se conecte la base de datos */

// Middleware de REQUESTS
app.use(mostrarDatosRequest);

app.get("/", (req, res) => {
  res.send("To-Do API");
});

// Users
app.get("/users", getUsuarios);
app.post("/signup", postUsuario); /* registrar usuario */
app.post("/login", loginUsuario); /* login usuario */
// Middleware de USUARIOS
app.use(controlarSesion);
app.post("/logout", logoutUsuario); /* logout usuario */

/* --- */

// Products
app.get("/products", getProductos); /* obtener  todos los productos */
app.get("/product/:id", getProductoById); /* obtener pdtos por id */
app.get("/product/type/:type", getProductoByType); /* obtener productos por categoría */
app.post("/product", postProducto); /* agregar nuevo pdto */
app.put("/product/:id", putProducto); /* modificar pdto */
app.delete("/product/:id", deleteProducto); /* eliminar pdto */

/* --- */

// Middleware de ERRORES
app.use(manejadorErrores);

// Srv levantado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
