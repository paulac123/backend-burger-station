const app = require("./app");
const { PORT } = require("./src/config/config");

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto${PORT}`);
});
