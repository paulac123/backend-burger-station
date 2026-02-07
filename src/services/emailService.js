const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

dotenv.config();

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

async function sendMail({ to, subject, text, html }) {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    await transporter.sendMail({
      from: `Burger Station <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("📧 Email enviado correctamente");
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    throw error;
  }
}
module.exports = sendMail;
