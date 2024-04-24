require("dotenv").config();
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import router from "./router";
import cors from "cors";
import mongoose from "mongoose";
// import socketIO from "socket.io"; // Import the socket.io module



const port = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server running on http://localhost:" + port + "/v1/api");
  // console.log("Server running on http://192.168.1.31:" + port);
});

const MONGO_URL = process.env.MONGO_CLOUD_URL;

mongoose.set("strictQuery", false);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use(cors());
app.use("/v1/api", router());
