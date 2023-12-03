import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/index.js";

const postModel = sequelize.define("post", {
  auther: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default postModel;
