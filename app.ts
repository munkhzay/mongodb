import express, { Request, Response } from "express";
import { userRouter } from "./router/userrouter";
import { connectDb } from "./database";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/", userRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("hhello express typescript");
// });
const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server running at a http://localhost:${port}/`);
  });
};
server();
