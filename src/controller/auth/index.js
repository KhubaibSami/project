import userModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import mailsender from "../../mail/index.js";

const userController = {
  create: async (req, res) => {
    try {
      const { userName, emailId, password } = req.body;
      // check -- new

      const checkEmail = await userModel.findOne({
        where: {
          emailId,
        },
      });
      if (checkEmail) {
        return res.json({ message: `user with this ${emailId} exists ` });
      }

      // ----   password hashed
      const hpassword = await hash(password, 10);
      // --- new

      const user = await userModel.create({
        userName,
        emailId,
        password: hpassword, // new
      });
      return res.status(201).json({ message: "user added", user });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },

  login: async (req, res) => {
    const { emailId, password } = req.body;
    const user = await userModel.findOne({
      where: {
        emailId,
      },
    });
    if (!user) {
      return res.json(`user with this ${emailId} not exists`);
    }
    const comparepassword = await compare(password, user.password);
    if (!comparepassword) {
      return res.json("invalid password");
    }

    // nodemailler
    mailsender();

    // token
    const id = user.id;
    const email = user.emailId;
    const data = { id, emailId };
    const token = jwt.sign(data, process.env.token, {
      expiresIn: "14d",
    });

    req.session.token = token;
    req.session.user = data;
    req.session.save();

    return res.json({ message: "loggin successfully", token });
  },

  delete: async (req, res) => {
    try {
      const { emailId } = req.body;
      const User = await userModel.findOne({
        where: {
          emailId,
        },
      });
      if (!User) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      await User.destroy();
      res.json({
        message: "user deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { userName, emailId, password } = req.body;

      const User = await userModel.findOne({
        where: {
          emailId,
        },
      });
      if (!User) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      User.userName = userName;
      User.emailId = emailId;
      User.password = password;

      await User.save();

      res.json({
        message: "user Updated",
        User,
        ss,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  search: async (req, res) => {
    try {
      const { emailId } = req.body;
      const user = await userModel.findOne({
        where: {
          emailId,
        },
      });
      if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "bad happens" });
    }
  },
};
export default userController;
