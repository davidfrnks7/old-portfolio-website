import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const mail = (req: NextApiRequest, res: NextApiResponse): void => {
  const { body } = req;
  const { key, name, email, subject, message } = body;

  if (!key) {
    res.status(401).send("Access key required!");
  } else if (key !== process.env.ACCESS_KEY) {
    res.status(401).send("Wrong access key!");
  } else if (key === process.env.ACCESS_KEY) {
    const transporterData = {
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
      requireTLS: true,
    };
    const transporter = nodemailer.createTransport(transporterData);

    const mailData = {
      from: `"Portfolio Website" <${process.env.EMAIL}>`,
      to: `${process.env.GMAIL_ACCOUNT}`,
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio Website Contact | ${subject}`,
      text: message,
      html: `<div>${message}</div>`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.warn(err);
        res
          .status(500)
          .send(
            "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo."
          );
      } else {
        console.info(info);
        res.status(200).send("Message sent");
      }
    });
  }
};

export default mail;
