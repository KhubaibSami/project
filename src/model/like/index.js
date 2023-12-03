import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import postModel from "../post/index.js";

const likeModel = sequelize.define("like", {
  auther: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  like: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
postModel.hasMany(likeModel);
likeModel.belongsTo(postModel);

export default likeModel;
