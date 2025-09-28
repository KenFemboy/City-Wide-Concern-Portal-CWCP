import userconcern from "../model/postModel.js"

export const fetchPosts = async (req, res) => {
  try {
    const Posts = await userconcern.find();

    if(Posts.length === 0){
        return res.status(404).json({ errorMessage: "no posts" });
    }
    res.status(200).json(Posts);
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};