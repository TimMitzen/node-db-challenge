const db = require("../config");

module.exports = {
  findTasks,
  addTasks
};

async function findTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.projects_Id")
    .select("t.id", "t.notes", "p.name", "p.description");
}

async function addTasks(body) {
  await db("tasks").insert(body);
  return db("tasks");
}
