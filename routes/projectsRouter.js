const express = require("express");

const projectsModel = require("./projectsModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectsModel.findProjects();
    projects.forEach(project => {
      project.completed == 0
        ? (project.completed = false)
        : (project.completed = true);
    });
    res.status(201).json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const projects = await projectsModel.addProjects(req.body);
    projects.forEach(project => {
      project.completed == 0
        ? (project.completed = false)
        : (project.completed = true);
    });
    res.status(201).json(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
