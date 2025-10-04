
import userconcern from "../model/postModel.js";

export const approvePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await userconcern.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.approved) {
      return res.status(400).json({ message: "Post is already approved" });
    }

    post.approved = true;
    const updatedPost = await post.save();

    res.status(200).json({
      message: "Post approved successfully",
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const rejectPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await userconcern.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    
    post.approved = false;
    await post.save();

    res.status(200).json({ message: "Post rejected/removed successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};