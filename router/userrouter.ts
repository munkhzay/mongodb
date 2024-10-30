import express from "express";
import { CreateUser } from "../controller/post/usercontroller";
import { GetUser, GetUsers } from "../controller/get/getuser";
import { updateUser, getUserById } from "../controller/user";

export const userRouter = express.Router();
userRouter
  .post("/createUser", CreateUser)
  .get("/getUsers", GetUsers)
  .get("/getUser", GetUser)
  .put("/updateEmail", updateUser);
