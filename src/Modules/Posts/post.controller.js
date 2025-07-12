import { Router } from "express";
import * as postservice from "./Services/post.service.js";
const postController =Router();


postController.post('/',postservice.createPost);

 postController.delete('/:postId',postservice.Deletepost)

postController.get('/details', postservice.GetAlldetails);

 postController.get('/comment-count',postservice.CountComments)






export default postController;