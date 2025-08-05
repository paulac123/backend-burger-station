const userSchema = require("../schema/userSchema");

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: "validation error",
        details: error.details.map((d) => d.message),
      });
    }
    next();
  };
};

module.exports = validatorHandler;
