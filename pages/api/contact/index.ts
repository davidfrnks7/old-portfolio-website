import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const mail = (req: NextApiRequest, res: NextApiResponse): Promise<unknown> => {
  return new Promise((resolve) => {
    const { body } = req;
    const { key, name, email, subject, message } = body;

    // Prevent original object from being modified
    const newBody = Object(body);
    // Removing access key to prevent it from showing up in logs
    newBody.key = null;
    // Parsed newBody
    const parsedBody = JSON.stringify(newBody);

    // IP of the client
    const reqIP = req.socket.remoteAddress || req.connection.remoteAddress;

    if (!key) {
      console.info(
        reqIP + " tried to access /api/contact without an access key!"
      );
      res.status(401).end("Access key required!");
      return resolve("Access key required!");
    } else if (key !== process.env.ACCESS_KEY) {
      console.info(
        reqIP +
          " tried to access /api/contact with an invalid access key! Access key provided: " +
          key
      );
      res.status(403).end("Wrong access key!");
      return resolve("Wrong access key!");
    } else if (key === process.env.ACCESS_KEY) {
      console.info(reqIP + " accessed /api/contact with a valid access key.");

      if (!name || !email || !subject || !message) {
        console.info(
          reqIP +
            " did not provide appropriate form info. Info provided: " +
            parsedBody
        );

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
          if (key === "ABc123$%^") {
            console.info(
              "Test/Preview key used. All forms validated. Email not sent."
            );
          } else {
            const transporterData = {
              port: 465,
              host: "smtp.gmail.com",
              auth: {
                user: process.env.EMAIL_ACCOUNT,
                pass: process.env.EMAIL_PASSWORD,
              },
              secure: true,
              requireTLS: true,
            };
            const transporter = nodemailer.createTransport(transporterData);

            const mailData = {
              from: `"Portfolio Website" <${process.env.EMAIL}>`,
              to: `${process.env.EMAIL_ACCOUNT}`,
              replyTo: `"${name}" <${email}>`,
              subject: newSubject,
              text: message,
              html: `<div>${message}</div>`,
            };

            transporter.sendMail(mailData, (err, info) => {
              if (err) {
                console.warn("Failed to send the form: ", err);
                res
                  .status(500)
                  .end(
                    "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo."
                  );
                return resolve(
                  "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo."
                );
              } else {
                const parsedTransportInfo = JSON.stringify(info);

                console.info(
                  "Email sent successfully with: " +
                    parsedBody +
                    " the response information is: " +
                    parsedTransportInfo
                );
                res.status(200).end("Message sent");
                return resolve("Message sent");
              }
            });
          }
        } else {
          console.info(
            reqIP +
              " did not provide valid form info. Info provided: " +
              parsedBody
          );
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
