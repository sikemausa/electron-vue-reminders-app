<style scoped>
  h1 {
    width: 100%;
    background-color: grey;
  }
</style>

<template>
  <div>
    <h1>Reminders</h1>
    <add-reminder
      :createReminder = 'createReminder'
      :addReminder = 'addReminder'
      :fetchReminders = 'fetchReminders'
    ></add-reminder>
    <p> {{ reminder }} </p>
    <reminders-list
      :reminders = 'reminders'
      :deleteReminder = 'deleteReminder'
    ></reminders-list>
  </div>
</template>

<script>
  import RemindersList from './Home/RemindersList';
  import AddReminder from './Home/AddReminder';
  import { remote } from 'electron';
  import path from 'path';
  const database = remote.require(path.join(process.cwd(), 'app/database.js'));
  global.database = database;

  export default {
    components: {
      RemindersList,
      AddReminder,
    },
    name: 'landing-page',
    created() {
      this.fetchReminders();
    },
    data() {
      return {
        reminders: [],
      };
    },
    methods: {
      deleteReminder(id) {
        database('reminders').where('id', id).del()
        .then(() => this.fetchReminders());
      },
      addReminder(title, due, createdAt, e) {
        e.preventDefault();
        database('reminders').insert({ title, createdAt, due })
        .then(() => this.fetchReminders(e));
      },
      fetchReminders() {
        this.reminders = [];
        database.select().from('reminders').then((reminders) => {
          reminders.forEach((reminder) => {
            this.reminders.push(reminder);
          });
        });
      },
    },
  };
</script>
