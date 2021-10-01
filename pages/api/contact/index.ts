import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const mail = (req: NextApiRequest, res: NextApiResponse): void => {
  const { body } = req;

  if (!body.key) {
    res.status(401).send("Access key required!");
  } else if (body.key !== process.env.ACCESS_KEY) {
    res.status(401).send("Wrong access key!");
  } else if (body.key === process.env.ACCESS_KEY) {
    console.info("API: recived: ", body);
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
    });
  }
};

export default mail;
