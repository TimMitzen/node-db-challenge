const db = require("../config");

module.exports = {
  findProjects,
  addProjects
};

async function findProjects() {
  return db("projects").select("*");
}

async function addProjects(body) {
  await db("projects").insert(body);
  return db("projects");
}
