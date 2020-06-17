const nodemailer = require('nodemailer');

var config = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e90f3614dc8e5c",
      pass: "1b00b2bc65fae1"
    }
  });

module.exports = config;