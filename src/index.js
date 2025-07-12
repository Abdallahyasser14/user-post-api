import express from "express";
import postController from "./Modules/Posts/post.controller.js"
import userController from "./Modules/Users/user.controller.js";
import commentController from "./Modules/Comments/comment.controller.js";
import User from "./DB/Models/user.model.js";

import { test } from "./DB/db.connection.js";
import Post from "./DB/Models/post.model.js";
import Comment from "./DB/Models/comment.model.js";
const app = express();
Post
Comment
User

test(); 
app.use(express.json());
app.use('/users',userController)
app.use('/posts',postController)
app.use('/comments',commentController)



app.listen(3000,()=>{


    console.log("server is running 3000");
})
