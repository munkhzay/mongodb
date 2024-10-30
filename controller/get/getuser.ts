import UserModel from "../../model/user";
import { Request, Response } from "express";
export const GetUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json({ users: users });
  } catch (error) {
    res.json({ error });
  }
};

export const GetUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user = await UserModel.findById(id);
    res.json({ user: user });
  } catch (error) {
    res.json({ error });
  }
};
