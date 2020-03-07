const express = require("express");
const server = express();
const projectsRouter = require("./routes/projectsRouter");
const tasksRouter = require("./routes/tasksRouter");
const resourcesRouter = require("./routes/resourcesRouter");
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;
