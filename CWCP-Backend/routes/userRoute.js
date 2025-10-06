import express from "express";
import upload from "../middleware/upload.js";
import { createPost } from "../controller/createPost.js";
import { fetchPosts,getApprovedPosts, fetchPostsViaSearchbar  } from "../controller/fetchPosts.js";
import { approvePost, rejectPost, deletePost,changeStatus } from "../controller/postController.js";


const route = express.Router();

route.post("/post", upload.single("photo"), createPost); //  handle file
route.get("/fetch", fetchPosts);
route.get("/getApproved", getApprovedPosts);
route.get("/search", fetchPostsViaSearchbar);
route.put("/approve/:id", approvePost);
route.put("/reject/:id", rejectPost);
route.put("/status/:id", changeStatus);

route.delete("/delete/:id", deletePost)


export default route;
