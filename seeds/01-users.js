
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Andy', website: 'Woody'},
        {username: 'Sid', website: 'Buzz'},
        {username: 'Mr. Potatohead', website: "Andy's Mom"}
      ]);
    });
};
