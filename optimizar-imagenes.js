// importamos las herramientas que vamos a usar
const sharp = require("sharp");   // para convertir imágenes
const fs = require("fs");         // para leer archivos del sistema
const path = require("path");     // para construir rutas de carpetas

// definimos dónde están las imágenes originales
const carpetaOriginal = path.join(__dirname, "images");

// definimos dónde guardaremos las imágenes convertidas
const carpetaNueva = path.join(__dirname, "images-webp");

// si la carpeta images-webp no existe, la creamos
if (!fs.existsSync(carpetaNueva)) {
  fs.mkdirSync(carpetaNueva);
}

// leemos todos los archivos que hay dentro de /images
const archivos = fs.readdirSync(carpetaOriginal);

// recorremos cada archivo uno por uno
archivos.forEach(async (archivo) => {

  // solo procesamos los que terminen en .png
  if (!archivo.endsWith(".png")) return;

  // quitamos tildes y ñ del nombre
  const nombreLimpio = archivo
    .replace("ñ", "n")
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace("ú", "u");

  // cambiamos la extensión de .png a .webp
  const nombreWebp = nombreLimpio.replace(".png", ".webp");

  // construimos la ruta completa del archivo original
  const rutaOrigen = path.join(carpetaOriginal, archivo);

  // construimos la ruta completa donde guardaremos el webp
  const rutaDestino = path.join(carpetaNueva, nombreWebp);

  // convertimos la imagen y la guardamos
  await sharp(rutaOrigen)
    .webp({ quality: 80 })
    .toFile(rutaDestino);

  console.log(`✓ ${archivo} a ${nombreWebp}`);
});
