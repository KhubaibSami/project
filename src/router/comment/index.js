import { Router } from "express";
import commentController from "../../controller/commnet/index.js";
import commentValidators from "../../validators/comment/index.js";

const commentRouter = Router();
// commentRouter.post("/post/:post_id/comment", commentValidators.create, commentController.create);

commentRouter.post(
  "/comment",
  commentValidators.create,
  commentController.create
);
commentRouter.delete("/delete", commentController.delete);
commentRouter.put("/:id", commentController.update);

export default commentRouter;
