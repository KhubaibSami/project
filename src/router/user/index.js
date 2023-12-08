import { Router } from "express";
import userController from "../../controller/auth/index.js";
import userValidators from "../../validators/user/index.js";

const userRouter = Router();

userRouter.post("/register", userValidators.create, userController.create);
userRouter.post("/login", userController.login);
userRouter.delete("/delete", userController.delete);
userRouter.post("/search", userController.search);
userRouter.put("/:id", userController.update);


export default userRouter;
