const { PORT } = require("./src/config/config");
const app = require("./app");

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto${PORT}`);
});
