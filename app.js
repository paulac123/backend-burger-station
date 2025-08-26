const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const errorHandler = require("./src/middleware/error.handler");

const app = express();

app.use(cors());
app.use(express.json());

// Middleware para servir imágenes estáticas
app.use("/images", express.static("images")); // <- aquí va

// Tus rutas de la API
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Bienvenidos a The Burger Station");
});

app.use(errorHandler);

module.exports = app;
