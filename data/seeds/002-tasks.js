exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "To the database",
          completed: false,
          projects_id: 2
        },
        {
          id: 2,
          description: "To the database",
          completed: true,
          projects_id: 3
        },
        {
          id: 3,
          description: "To the database",
          completed: false,
          projects_id: 1
        }
      ]);
    });
};
