const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async ({ to, subject, text, html }) => {
  const msg = {
    to,
    from: "paulacruz.tg@gmail.com",
    subject: "Gracias por tu compra",
    text: "Ya tomamos tu pedido",
    html: "<h1>Gracias por tu compra , estamos preparando tu orden</h1>",
  };
  try {
    await sgMail.send(msg);
    console.log("Se envio el correo");
  } catch (error) {
    console.log("Error al enviar el msj:", error);
    throw error;
  }
};
module.exports = sendMail;
