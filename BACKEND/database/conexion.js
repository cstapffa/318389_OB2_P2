import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const urlDB = process.env.MongoDB_url;

export const conectarDB = () => {
  return mongoose
    .connect(urlDB)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log("Error conectando a la DB", error));
};
