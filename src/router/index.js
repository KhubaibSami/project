import { Router } from "express";
import postRouter from "./post/index.js";
import userRouter from "./user/index.js";
import commentRouter from "./comment/index.js";
import likeRouter from "./like/index.js";

const allRouters = Router();
allRouters.use("/user", userRouter);
allRouters.use("/post", postRouter);
allRouters.use("/comment", commentRouter);
allRouters.use("/like", likeRouter);

export default allRouters;
