const AddUserService = require("../services/newUserService");
const jwt = require("jsonwebtoken");

const service = new AddUserService();

const addNewUser = async (req, res, next) => {
  try {
    const body = req.body;

    const newUser = await service.addUser(body);
    console.log(" Nuevo usuario registrado:", newUser.email);

    // 4. Generar token JWT
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      user: newUser,
      token,
    });
  } catch (error) {
    // aquí NO inventamos el mensaje, simplemente usamos el que lanzó el service
    res.status(400).json({ message: error.message });
  }
};

module.exports = addNewUser;
