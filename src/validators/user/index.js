import Joi from "joi";

const userValidators = {
  create: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        userName: Joi.string().min(4).max(30).required(),
        emailId: Joi.string().email().max(30).required(),
        password: Joi.string().min(8).max(16).required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(404).json({ message: "bad happen", error });
      }
      next();
    } catch (error) {
      return res.status.json({ message: "somethingh bad happen", error });
    }
  },
};
export default userValidators;
