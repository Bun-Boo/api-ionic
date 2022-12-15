import { createError } from "../error.js";
import User from "../models/User.js";
export const update = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    return next(createError(404, "you can not get user"));
  }
};
export const post = async (req, res, next) => {
  const newStudent = new User({ ...req.body });
  try {
    const saveStudent = await newStudent.save();
    res.status(200).json(saveStudent);
  } catch (error) {
    next(error);
  }
};
