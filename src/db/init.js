import userModel from "../model/user/index.js";
import postModel from "../model/post/index.js";
import likeModel from "../model/like/index.js";
import commentModel from "../model/comment/index.js";

const dbinit = async () => {
  await userModel.sync({
    alter: true,
    force: false,
  }),
    await postModel.sync({
      alter: true,
      force: false,
    });
    await likeModel.sync({
      alter: true,
      force: false,
    });
    await commentModel.sync({
      alter: true,
      force: false,
    });
    
};
export default dbinit;
