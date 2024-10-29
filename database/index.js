import mongoose from "mongoose";
import "dotenv/config";
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
