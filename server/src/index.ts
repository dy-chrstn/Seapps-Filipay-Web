require("dotenv").config();
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import router from "./router";
import cors from "cors";
import mongoose from "mongoose";

const port = 3050;

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = 'mongodb://localhost:27017/filipay';

mongoose.set("strictQuery", false);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use(cors());
app.use("/", router());
