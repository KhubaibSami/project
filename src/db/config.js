import { Sequelize } from "sequelize";

// new 
const dbenv = process.env;

const sequelize = new Sequelize(dbenv.DB_name, dbenv.DB_user,dbenv.DB_password ,{
  host: dbenv.DB_host,
  port: dbenv.DB_port,
  dialect: dbenv.DB_dialect,
  logging: false,
});

export const connectdb = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established");
  } catch (error) {
    console.log("connection not established", error);
  }
};

export default sequelize;
