import dotenv from "dotenv";
dotenv.config();

const mail = (req, res): void => {
  console.info("API: recived: ", req.body);
};

export default mail;
