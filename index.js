import express from "express";
import { connectDb } from "./connectDb.js";
import { CreateUser } from "./controller/usercontroller.js";

const app = express();
app.use(express.json());
const port = 8080;
const userRouter = express.Router();
userRouter.post("/createUser", CreateUser);
app.use("/", userRouter);

connectDb();

const server = async () => {
  await connectDb();

  app.listen(port, () => {
    console.log(`server running at a http://localhost:${port}/`);
  });
};
server();
