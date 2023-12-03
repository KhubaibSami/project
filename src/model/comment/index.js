import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import postModel from "../post/index.js";

const commentModel = sequelize.define("comment", {
  auther: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);


export default commentModel;
