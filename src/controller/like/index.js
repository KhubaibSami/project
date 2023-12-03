import likeModel from "../../model/like/index.js";

const likeController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, like, postId } = req.body;
      const likes = await likeModel.create({
        auther,
        emailId,
        like,
        postId:2
      });
      return res.status(201).json({ message: "like added", likes });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { emailId,like } = req.body;
      const likes = await likeModel.findOne({
        where: {
          emailId,
          like
        },
      });
      if (!likes) {
        return res.status(404).json({
          message: "like not found",
        });
      }

      await likes.destroy();
      res.json({
        message: "like deleted successfully",
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
      const { emailId, like } = req.body;

      const likes = await likeModel.findOne({
        where: {
          id,
        },
      });
      if (!likes) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      likes.emailId = emailId;
      likes.like = like;

      await likes.save();

      res.json({
        message: "like Updated",
        likes,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

};
export default likeController;
