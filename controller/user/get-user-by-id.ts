import { Response, Request } from "express";
import UserModel from "../../model/user";
import mongoose from "mongoose";

export const getUserById = async (req: Request, res: Response) => {
  const { id, email } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const emailUpdate = await UserModel.findOneAndUpdate(
      { _id: objectId },
      { email },
      { new: true }
    );
    res.json({ email: emailUpdate });
  } catch (error) {
    res.json({ error: error });
  }
};
