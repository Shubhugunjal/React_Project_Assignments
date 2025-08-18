const asyncHandler = require("express-async-handler");

//get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all Tasks" });
});

// get task by id
const getTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get task for ${req.params.id}` });
});

// create task
const createTask = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "create task" });
});

//update task by id
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
});

// delete task by id
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete task ${req.params.id}` });
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
