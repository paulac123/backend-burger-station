const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message || err);
  const status = err.status || 500;

  res
    .status(status)
    .json({ error: err.message || "error interno del servidor" });
};

module.exports = errorHandler;
