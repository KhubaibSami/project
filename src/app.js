import "dotenv/config";// new

import express from "express";
import { connectdb } from "./db/config.js";
import dbinit from "./db/init.js";
import allRouters from "./router/index.js";

const app = express();
const port = 3201;

app.use(express.json());
app.use("/", allRouters);
connectdb();
dbinit()
  .then(() => console.log("DB sync"))
  .catch((err) => console.log("Db not sync",err));

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is starting at http://localhost:3201");
  } else {
    console.log("Server not started");
  }
});
