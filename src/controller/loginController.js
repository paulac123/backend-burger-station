const loginUser = require("../services/loginService");
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Email recibido:", email, password);
    const result = await loginUser({ email, password });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = loginController;
