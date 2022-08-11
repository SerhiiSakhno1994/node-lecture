const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465 2255,
  secure: true,
  auth: {
    user: "serhii.sakhno@meta.ua",
    pass: META_PASSWORD,
  },
};

const email = {
  to: "serhii.sakhno@ukr.net",
  from: "serhii.sakhno@meta.ua",
  subject: "Новое письмо с сайта",
  html: "<p>Новое письмо с сайта</p>",
};

const transporter = nodemailer.createTransport(nodemailerConfig);

transporter.sendMail(email);
