import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

const PORT = 3000;

dotenv.config({ path: "./config.env" });

const databaseURL: string | undefined = process.env.DATABASE || "";
const password: string | undefined = process.env.DATABASE_PASSWORD;

const DB = databaseURL!.replace("<PASSWORD>", password!);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection Successfull"))
  .catch((err: unknown) => console.log('Mongoose connection unsuccessful', err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
