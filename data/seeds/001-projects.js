exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "Adding tables", description: "To the database" },
        { id: 2, name: "Adding columns", description: "To the database" },
        { id: 3, name: "Adding titles", description: "To the database" }
      ]);
    });
};
