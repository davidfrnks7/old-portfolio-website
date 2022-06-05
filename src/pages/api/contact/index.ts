import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const contact = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> => {
  return new Promise((resolve) => {
    // Environment
    const environment = process.env.NODE_ENV || "development";

    // Body and Headers
    const { body, headers } = req;

    // Access key from headers
    const key = headers["x-api-key"];

    // Deconstruct the body
    const { name, email, subject, message } = body;

    // IP of the client
    const reqIP =
      headers["cf-connecting-ip"] ||
      headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.connection.remoteAddress;

    if (!key) {
      // No key provided
      console.info(
        reqIP +
          " tried to access /api/contact without an access key!\n" +
          "Body of request:\n" +
          JSON.stringify(body) +
          "\nInfo of the request:\n" +
          body
      );
      res
        .setHeader("Content-Type", "text/plain")
        .status(401)
        .end("Access key required!");
      return resolve("Access key required!");
    } else if (
      key === process.env.ACCESS_KEY ||
      (key === "ABc123@&!" && environment === "development")
    ) {
      // Key authenticated
      console.info(reqIP + " accessed /api/contact with a valid access key.");

      if (!name || !email || !subject || !message) {
        console.info(
          reqIP +
            " did not provide appropriate form info. Info provided:\n" +
            body
        );

        res
          .setHeader("Content-Type", "text/plain")
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
          subject: false
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
          // Validating info
          if (key === "ABc123@&!" && environment === "development") {
            // Check the key for Dev/Preview key.
            console.info(
              "Dev/Preview key used. All forms validated. Email not sent."
            );
            res
              .setHeader("Content-Type", "text/plain")
              .status(202)
              .end(
                "Dev/Preview key used. All forms validated. Email would have sent if environment was set to production."
              );
            return resolve(
              "Dev/Preview key used. All forms validated. Email would have sent if environment was set to production."
            );
          } else if (key === "ABc123@&!" && environment !== "development") {
            console.warn(
              reqIP +
                " Used dev/Preview key used while not in production. Form validation was started!! Email not sent."
            );
            res
              .setHeader("Content-Type", "text/plain")
              .status(202)
              .end(
                "Dev/Preview key used. This is not allowed in production mode. Your IP Address has been logged! FVS"
              );
            return resolve(
              "Dev/Preview key used while not in production. From validation started!! Email not sent."
            );
          } else {
            // Send message
            const transporterData = {
              port: 465,
              host: "smtp.gmail.com",
              auth: {
                user: process.env.EMAIL_ACCOUNT,
                pass: process.env.EMAIL_PASSWORD
              },
              secure: true,
              requireTLS: true
            };
            const transporter = nodemailer.createTransport(transporterData);

            const mailData = {
              from: `"Portfolio Website" <${process.env.EMAIL}>`,
              to: `${process.env.EMAIL_ACCOUNT}`,
              replyTo: `"${name}" <${email}>`,
              subject: newSubject,
              text: message,
              html: `<div>${message}</div>`
            };

            transporter.sendMail(mailData, (err, info) => {
              if (err) {
                // Error sending
                console.error("Failed to send the form:\n", err);
                res
                  .setHeader("Content-Type", "text/plain")
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
                  "Email sent successfully with:\n" +
                    body +
                    "\n\nThe response information is:\n" +
                    parsedTransportInfo
                );
                res
                  .setHeader("Content-Type", "text/plain")
                  .status(200)
                  .end("Message sent");
                return resolve("Message sent");
              }
            });
          }
        } else {
          // Forms did not validate
          console.info(
            reqIP + " did not provide valid form info. Info provided:\n" + body
          );
          res
            .setHeader("Content-Type", "text/plain")
            .status(400)
            .end("Invalid form data. Please check that all fields are valid.");
        }
      }
    } else if (key === "ABc123@&!" && environment !== "development") {
      // Dev/Preview key used on Prod
      console.info(
        reqIP +
          " Used dev/Preview key used while not in production. From validation was not started. Email not sent."
      );
      res
        .setHeader("Content-Type", "text/plain")
        .status(403)
        .end(
          "Dev/Preview key used. This is not allowed in production mode. Your IP Address was logged. FVNS"
        );
      return resolve(
        "Dev/Preview key used while not in production. From validation was not started. Email not sent."
      );
    } else if (key !== process.env.ACCESS_KEY) {
      // Key was provided, but does not match
      console.info(
        reqIP +
          " tried to access /api/contact with an invalid access key! Access key provided: " +
          key
      );
      res
        .setHeader("Content-Type", "text/plain")
        .status(403)
        .end("Wrong access key!");
      return resolve("Wrong access key!");
    } else {
      console.error(
        "An unknown error occurred.\nRequest:\n" +
          req +
          "Request body:\n" +
          body +
          "Client ip: " +
          reqIP
      );
    }
  });
};

export default contact;
