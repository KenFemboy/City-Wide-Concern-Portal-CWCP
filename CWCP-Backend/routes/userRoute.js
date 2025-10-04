import express from "express";
import upload from "../middleware/upload.js";
import { createPost } from "../controller/createPost.js";
import { fetchPosts,getApprovedPosts } from "../controller/fetchPosts.js";

const route = express.Router();

route.post("/post", upload.single("photo"), createPost); //  handle file
route.get("/fetch", fetchPosts);
route.get("/getApproved", getApprovedPosts);
export default route;
