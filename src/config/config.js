require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
};
