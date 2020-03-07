const express = require("express");

const tasksModel = require("./tasksModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const task = await tasksModel.findTasks();
    task.forEach(tasks => {
      tasks.completed == 0 ? (task.completed = false) : (task.completed = true);
    });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const tasks = await tasksModel.addTasks(req.body);
    tasks.forEach(task => {
      task.completed == 0 ? (task.completed = false) : (task.completed = true);
    });
    res.status(201).json(tasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
