const db = require("../config");

module.exports = {
  findResources,
  addResources
};

async function findResources() {
  return db("resources").select("*");
}

async function addResources(body) {
  await db("resources").insert(body);
  return db("resources");
}
