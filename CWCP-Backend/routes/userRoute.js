import express from "express"

import { createPost } from "../controller/createPost.js"
import { fetchPosts } from "../controller/fetchPosts.js";
const route = express.Router();

route.post("/post", createPost)
route.get("/fetch", fetchPosts)

export default route;