import UserModel from "../../model/user";
import { Response, Request } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  const { email, firstname } = req.body;
  try {
    const user = await new UserModel({
      email: email,
      firstname: firstname,
    }).save();
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
