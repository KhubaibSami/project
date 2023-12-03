import postModel from "../../model/post/index.js";

const postController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, content, userId } = req.body;
      const post = await postModel.create({
        auther,
        emailId,
        content,
        userId:1
      });
      return res.status(201).json({ message: "post added", post });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { emailId,post } = req.body;
      const posts = await postModel.findOne({
        where: {
          emailId,
          post
        },
      });
      if (!posts) {
        return res.status(404).json({
          message: "post not found",
        });
      }

      await posts.destroy();
      res.json({
        message: "post deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { emailId, post } = req.body;

      const posts = await postModel.findOne({
        where: {
          id,
        },
      });
      if (!posts) {
        return res.status(404).json({
          message: "post not found",
        });
      }

      posts.emailId = emailId;
      posts.post = post;

      await posts.save();

      res.json({
        message: "post Updated",
        post,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

};
export default postController;
