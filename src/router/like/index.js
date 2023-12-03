import { Router } from "express";
import likeController from "../../controller/like/index.js";
import likeValidators from "../../validators/like/index.js";

const likeRouter = Router();

likeRouter.post("/like", likeValidators.create, likeController.create);

export default likeRouter;
