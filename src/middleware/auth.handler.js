const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No ha enviado el token" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "token invalido" });
  }
};
module.exports = authMiddleware;
