import nodemailer from "nodemailer";
const mailenv = process.env;

const mailsender = () => {
  var transport = nodemailer.createTransport({
    host: mailenv.mailenv,
    port: mailenv.mail_port,
    from: mailenv.mail_from,
    to: "bar@example.com, baz@example.com",
    subject: "recieved",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
    auth: {
      user: mailenv.mail_user,
      pass: mailenv.envmail_pass,
    },
  });

  const msg = {
    to: "abc@gmail.com",
  };
  transport.sendMail(msg);
};

export default mailsender;
