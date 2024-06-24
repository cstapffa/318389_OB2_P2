import { Schema, model } from "mongoose";

const schemaProducto = new Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  usuario: String,
});

export const ModeloProducto = model("Producto", schemaProducto);
