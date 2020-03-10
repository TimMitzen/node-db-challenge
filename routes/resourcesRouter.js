const express = require("express");

const resourcesModel = require("./resourcesModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await resourcesModel.findResources();

    res.status(201).json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resources = await resourcesModel.addResources(req.body);
    res.status(201).json(resources);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
