import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

const contact = (
  req: NextApiRequest,
  res: NextApiResponse<unknown>
): Promise<NextApiResponse<unknown>> => {
  return new Promise((resolve, reject) => {
    // Environment
    const environment = process.env.NODE_ENV || "development";

    // Body, Headers, and Method
    const { body, headers, method } = req;

    // Stringified body for the logs
    const bodyString = JSON.stringify(body);

    // Access key from headers
    const headerKey = headers["x-api-key"];

    // Access key from env
    const envKey: string = process.env.ACCESS_KEY ? process.env.ACCESS_KEY : "";

    // Deconstruct the body
    const { name, email, subject, message } = body;

    // IP of the client
    const reqIP =
      headers["cf-connecting-ip"] ||
      headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.connection.remoteAddress;

    // Response string
    let resString = "";

    // Error response
    const errResponse = () => Object.assign({ error: resString });

    // * Check method of the request * //

    // If method is not POST
    if (method !== "POST") {
      resString = "This method is not allowed on this endpoint";

      console.info(
        reqIP +
          " tried to make a + " +
          method +
          " request on /api/contact which is not allowed!\n" +
          "Request body:\n" +
          JSON.stringify(body) +
          "\nAPI key provided:\n" +
          headerKey
      );

      res.status(404).json(errResponse());

      reject(resString);
    }

    // * API KEY * //

    let validKey = false;
    let validationType:
      | "valid"
      | "validating"
      | "not validated"
      | "invalid"
      | "development" = "not validated";

    validationType = "validating";

    // Checking if a key was provided
    if (!headerKey) {
      resString = "API key required!";
      validKey = false;
      validationType = "invalid";

      console.info(
        reqIP +
          "tried to access /api/contact without an API key!\n" +
          "Request body:\n" +
          JSON.stringify(body)
      );

      res.status(401).json(errResponse());

      return reject(res);
    }

    // Checking if the keys don't match
    if (envKey !== headerKey) {
      resString = "Wrong API key!";
      validKey = false;
      validationType = "invalid";

      console.warn(
        reqIP +
          " tried to access /api/contact with an invalid API key! API key provided: " +
          headerKey
      );

      res.status(403).json(errResponse());

      return reject(res);
    }

    // Check if the key is the dev or preview key and the environment is NOT development.
    if (headerKey === "ABc123@&!" && environment !== "development") {
      resString =
        "Dev/Preview key used in production mode. This key is not allowed in production mode. Your IP Address has been logged!";
      validKey = false;
      validationType = "invalid";

      console.warn(
        reqIP +
          " Used dev/Preview key used while not in production. Email not sent."
      );

      res.status(403).json(errResponse());

      return reject(res);
    }

    // Check if the key is the dev or preview key and the environment is development.
    if (headerKey === "ABc123@&!" && environment === "development") {
      validKey = true;
      validationType = "development";

      console.info(
        `${reqIP} accessed /api/context with the api key with the development key in development mode.`
      );
    }

    if (headerKey === envKey && environment === "production") {
      validKey = true;
      validationType = "valid";

      console.info(
        `${reqIP} accessed /api/context with the valid api key in production mode.`
      );
    }

    // Checking that the expected information was provided.
    if (!name || !email || !subject || !message) {
      resString =
        "Invalid form data. Please make sure all form fields are filled out.";

      console.info(
        reqIP +
          " did not provide a completed form. Info provided:\n" +
          bodyString
      );

      res.status(400).json(errResponse());

      return reject(res);
    }

    // * Validating Form * //

    // Validating information provided.
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
      return Object.values(validFields).every((e) => e);
    };

    // Invalid form fields
    if (!validate()) {
      resString = "Invalid form data. Please check that all fields are valid.";

      res.status(400).json(errResponse());

      return reject(res);
    }

    if (validKey && validationType === "development") {
      resString =
        "Dev key validated in dev mode. Form validated. Message not sent.";
      console.info(
        "Form validated in development mode with a valid key. Message not sent."
      );

      res.status(200).send(resString);

      return resolve(res);
    }

    // * Sending Messasge * //

    const transportData = {
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      },
      secure: true,
      requireTLS: true
    };

    const transporter = nodemailer.createTransport(transportData);

    const mailData = {
      from: `"Portfolio Website" <${process.env.EMAIL}>`,
      to: `${process.env.EMAIL_ACCOUNT}`,
      replyTo: `"${name}" <${email}>`,
      subject: newSubject,
      text: message,
      html: `<div>${message}</div>`
    };

    transporter.sendMail(mailData, (err, info) => {
      // Error sending
      if (err) {
        resString =
          "An error occurred while trying to send this email. If the error persists please open an issue on the GitHub repo.";
        console.warn("Failed to send the form:\n" + err);

        res.status(500).json(errResponse());

        return reject(res);
      }

      resString = "Message sent!";

      // Stringify the transporter info
      const transporterInfoString: string = JSON.stringify(info);

      console.info(
        "Email sent successfully with:\n" +
          bodyString +
          "\n\nThe response body information is:\n" +
          transporterInfoString
      );

      res.status(202).send(resString);

      return resolve(res);
    });

    resString =
      "An unknown error occurred. Please try again. If the issue persists please open a GitHub issue.";

    console.error(
      "An unknown error occurred.\nBody:\n" +
        bodyString +
        "\nKey:" +
        headerKey +
        "Client ip:" +
        reqIP
    );

    res.status(500).json(errResponse());

    return reject(res);
  });
};

export default contact;
