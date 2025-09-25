import userSchema from "../model/userModel.js"

export const createPost = async (req, res) => {
  try {
    const userPost = new userSchema(req.body);

    const savedData = await userPost.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};