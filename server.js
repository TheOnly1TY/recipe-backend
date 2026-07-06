import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config({ path: "./config.env" });

import app from "./app.js"
const PORT = 3000;


const databaseURL = process.env.DATABASE;
const password = process.env.DATABASE_PASSWORD;

const DB = databaseURL.replace("<PASSWORD>", password);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection Successfull"))
  .catch((err) => console.log('Mongoose connection unsuccessful', err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
