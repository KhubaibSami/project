
import nodemailer from "nodemailer";

const mailsender = () => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "91ed72abece65a",
      pass: "5a82102eda5dd5",
    },
  });

  const msg = {
    to: "abc@gmail.com",
  };
  transport.sendMail(msg);
};

export default mailsender;
