import Goal from "../models/goalModel.js";
import asyncHandler from "express-async-handler";

// @desc  set/create goal
// route  GET /

/*
 ram token
jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTYwN2I5NzlhZDA4OTRlNmEwOWE1YWQiLCJpYXQiOjE3MDA4MjE5MTEsImV4cCI6MTcwMzQxMzkxMX0.pyqjpOuNEu5X2p7Zu9IFwCze97MnpGDqmsMYy1OIwA0; Path=/; HttpOnly; Expires=Sun, 24 Dec 2023 10:31:51 GMT;

*/

const setGoal = asyncHandler(async (req, res) => {
  const { title, text } = req.body;

  if (title !== "" && !text !== "") {
    const creategoal = await Goal.create({ title, text, user: req.user.id });
    if (creategoal) {
      res.status(201).json(creategoal);
    } else {
      res.status(401).json("Goal not created");
      throw new Error("Goal not created server error");
    }
  } else {
    res.status(401).json("fill all  filds");
    throw new Error("all fields are required");
  }
});

// @desc  get all goals
// route  GET /
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  if (goals) {
    res.status(200).json(goals);
  } else {
    res.status(401);
    throw new Error("Goal not created server error");
  }
});

// @desc  get single goal
// route  POST /
const getGoal = asyncHandler(async (req, res) => {
  const findgoal = await Goal.findById(req.params.id);
  if (findgoal) {
    res.status(200).json(findgoal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

const updateGoal = asyncHandler(async (req, res) => {
  const { title, text } = req.body;

  const findgoal = await Goal.findById(req.params.id);

  if (findgoal) {
    const udatedgoal = {
      user: findgoal.user,
      title: title || findgoal.title,
      text: text || findgoal.text,
    };

    const updatedgoal = await Goal.findByIdAndUpdate(
      req.params.id,
      udatedgoal,
      { new: true }
    );
    res.status(200).json(updatedgoal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});
const deleteGoal = asyncHandler(async (req, res) => {
  const deletedgoal = await Goal.findByIdAndDelete(req.params.id);

  if (!deletedgoal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  res.status(200).json(deletedgoal._id);
});

const deleteAllGoals = asyncHandler(async (req, res) => {
  const deleted = await Goal.deleteMany({ user: req.user.id });
  res.status(200).json(deleted);
});

export { setGoal, getGoal, getGoals, updateGoal, deleteGoal, deleteAllGoals };
