require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite',
  },
});

database.schema.hasTable('reminders').then((exists) => {
  if (!exists) {
    return database.schema.createTable('reminders', (t) => {
      t.increments('id').primary();
      t.string('title', 100);
      t.text('due');
      t.boolean('displayedNotification');
    });
  }
});

module.exports = database;
