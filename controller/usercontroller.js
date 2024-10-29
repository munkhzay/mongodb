import UserModel from "../model/user.js";
export const CreateUser = async (req, res) => {
  const { email, firstname } = req.body;
  console.log(req.body);
  try {
    const user = await new UserModel({
      email: email,
      firstname: firstname,
    }).save();
    res.json({ user: user });
    return user;
  } catch (error) {
    res.json({ error });
  }
};
