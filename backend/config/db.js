import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connected successfully.....");
      })
      .catch((err) => {
        console.log(`error : ${err}`);
      });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
