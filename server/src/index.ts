require("dotenv").config();
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import router from "./router";
import cors from "cors";
import mongoose from "mongoose";
// import socketIO from "socket.io"; // Import the socket.io module
import { Server as SocketIOServer, Socket } from "socket.io";
import socketController from './controller/RealTime/SocketController'



const port = 3050;

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"], // Allow GET, POST, and PUT requests
  },
});

socketController(io);

server.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = 'mongodb://localhost:27017/googleMap';

mongoose.set("strictQuery", false);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use(cors());
app.use("/", router());
