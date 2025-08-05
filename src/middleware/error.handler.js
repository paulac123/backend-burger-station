const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message || err);
  res.status(500).json({ error: "error interno del servidor" });
};

module.exports = errorHandler;
