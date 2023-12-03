import { Router } from "express";
import postRouter from "./post/index.js";
import userRouter from "./user/index.js";
import commentRouter from "./comment/index.js";
import likeRouter from "./like/index.js";
// import mailRouter from "./mail/index.js";

const allRouters = Router();
allRouters.use("/user", userRouter);
allRouters.use("/post", postRouter);
// allRouters.use("/mail", mailRouter);
allRouters.use("/comment", commentRouter);
allRouters.use("/like", likeRouter);

export default allRouters;
