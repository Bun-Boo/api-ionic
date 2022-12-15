import express from "express";
import { deleteUser, getUser, update, post } from "../controllers/user.js";

const router = express.Router();
router.post("/", post);
//update
router.put("/:id", update);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/find", getUser);

export default router;
