require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite',
  },
});

database.schema.hasTable('r`eminders').then((exists) => {
  if (!exists) {
    return database.schema.createTable('reminders', (t) => {
      t.increments('id').primary();
      t.string('title', 100);
      t.text('due');
      t.text('alternateNotification');
      t.boolean('displayedDueNotification');
      t.boolean('displayedAlternateNotification');
    });
  }
});

module.exports = database;
