import Joi from "joi";

const commentValidators = {
  create: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        auther: Joi.string().min(4).max(30).required(),
        emailId: Joi.string().email().max(30).required(),
        comment: Joi.string().min(6).max(70).required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(404).json({ message: "bad happen", error });
      }
      next();
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
};
export default commentValidators;
