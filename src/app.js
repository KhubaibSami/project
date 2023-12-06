import "dotenv/config"; // new


import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
import express from "express";
import sequelize, { connectdb } from "./db/config.js";
import dbinit from "./db/init.js";
import allRouters from "./router/index.js";

const app = express();
const port = process.env.app_port;

app.use(express.json());
connectdb();
dbinit()
  .then(() => console.log("DB sync"))
  .catch((err) => console.log("Db not sync", err));

const mySequelizestore = sequelizeStore(session.Store);
const mySequelizestore1 = new mySequelizestore({
  db: sequelize,
});

app.use(
  session({
    secret: "mianmuhmmadkhubaibsami",
    store: mySequelizestore1,
    saveUninitialized: false,
    resave: true,
    proxy: false,
  })
);
mySequelizestore1.sync()

app.use("/", allRouters);
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is starting at http://localhost:3201");
  } else {
    console.log("Server not started");
  }
});
