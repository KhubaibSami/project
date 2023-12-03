import commentModel from "../../model/comment/index.js";

const commentController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, comment } = req.body;
      const coment = await commentModel.create({
        auther,
        emailId,
        comment,
        postId:2
      });
      return res.status(201).json({ message: "comment added", coment });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { emailId,comment } = req.body;
      const coment = await commentModel.findOne({
        where: {
          emailId,
          comment
        },
      });
      if (!coment) {
        return res.status(404).json({
          message: "coment not found",
        });
      }

      await coment.destroy();
      res.json({
        message: "coment deleted successfully",
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
      const { emailId, comment } = req.body;

      const coment = await commentModel.findOne({
        where: {
          id,
        },
      });
      if (!coment) {
        return res.status(404).json({
          message: "coment not found",
        });
      }

      coment.emailId = emailId;
      coment.comment = comment;

      await coment.save();

      res.json({
        message: "coment Updated",
        coment,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

};
export default commentController;
