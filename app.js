const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const errorHandler = require("./src/middleware/error.handler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Bienvenidos a The burger station");
});

app.use(errorHandler);

module.exports = app;
