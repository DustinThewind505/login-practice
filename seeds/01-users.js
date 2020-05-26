
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {message: 'Ello Poppet 1', ship: 'Black Vessel'},
        {message: 'Ello Poppet 2', ship: 'Blue Vessel'},
        {message: 'Ello Poppet 3', ship: 'Green Vessel'}
      ]);
    });
};
