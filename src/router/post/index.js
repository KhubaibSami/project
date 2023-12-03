import { Router } from "express";
import postController from "../../controller/post/index.js";
import postValidators from "../../validators/post/index.js";

const postRouter = Router();

postRouter.post("/publish", postValidators.create, postController.create);

export default postRouter;
