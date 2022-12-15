import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();

const connect = () =>
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      throw err;
    });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/students", userRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORTCL = 8080;
app.listen(process.env.PORT || PORTCL, () => {
  connect();
  console.log("Server connected");
});
