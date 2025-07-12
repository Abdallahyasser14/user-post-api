import { Router } from "express";
import * as commentservice from "./Services/comment.service.js";
const commentController = Router();

commentController.post("/", commentservice.addcomments);

commentController.patch("/:commentId", commentservice.UpdateComment);

commentController.post("/find-or-create", commentservice.FindOrCreate);

commentController.get("/search", commentservice.SearchAndGetAll);

commentController.get("/newest/:postId", commentservice.GetRecentPosts);

commentController.get("/details/:id", commentservice.GetSpecificComment);

export default commentController;
