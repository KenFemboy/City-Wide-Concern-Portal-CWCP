import express from "express"

import { createPost } from "../controller/userController.js"

const route = express.Router();

route.post("/post", createPost)

export default route;