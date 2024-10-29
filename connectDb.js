import mongoose from "mongoose";
import "dotenv/config";
export const connectDb = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("database connect"));
  } catch (error) {
    console.log(error);
  }
};
