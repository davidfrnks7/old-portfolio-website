import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const mail = (req: NextApiRequest, res: NextApiResponse): Promise<unknown> => {
  return new Promise((resolve) => {
    const { body } = req;
    const { key, name, email, subject, message } = body;

    if (!key) {
      res.status(401).end("Access key required!");
      return resolve("Access key required!");
    } else if (key !== process.env.ACCESS_KEY) {
      res.status(403).end("Wrong access key!");
      return resolve("Wrong access key!");
    } else if (key === process.env.ACCESS_KEY) {
      if (!name || !email || !subject || !message) {
        res
          .status(400)
          .end(
            "Invalid form data. Please make sure all fields are filled out."
          );
      } else {
        interface Validate {
          name: boolean;
          email: boolean;
          subject: boolean;
        }

        const validFields: Validate = {
          name: false,
          email: false,
          subject: false,
        };

        if (!/[\d]/gi.test(name)) {
          validFields.name = true;
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
          validFields.email = true;
        }

        const newSubject = "Portfolio Website Contact | " + subject;

        if (newSubject.length < 200) {
          validFields.subject = true;
        }

        const validate = (): boolean => {
          let ready = false;

          if (Object.values(validFields).every((e) => e)) {
            ready = true;
          }

          return ready;
        };

        if (validate()) {
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
            subject: newSubject,
            text: message,
            html: `<div>${message}</div>`,
          };

          transporter.sendMail(mailData, (err /*, info*/) => {
            if (err) {
              console.warn(err);
              res
                .status(500)
                .end(
                  "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo."
                );
              return resolve(
                "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo."
              );
            } else {
              // console.info(info);
              res.status(200).end("Message sent");
              return resolve("Message sent");
            }
          });
        } else {
          res
            .status(400)
            .end(
              "Invalid form data. Please make sure all fields are filled out."
            );
        }
      }
    }
  });
};

export default mail;
