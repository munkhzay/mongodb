import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Response, Request } from "express";
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const objectid = mongoose.Types.ObjectId.createFromHexString(id);
    const user = await UserModel.deleteOne({ _id: objectid }, { new: true });
    res.json({ user: user });
  } catch (error) {
    res.json({ error: error });
  }
};
