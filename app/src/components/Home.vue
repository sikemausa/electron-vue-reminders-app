<style scoped>
  h1 {
    background-color: #455A64;
    color: #FFF;
    font-size: 1.7em;
    font-weight: 700;
    height: 35px;
    width: 100vw;
  }
</style>

<template>
  <div>
    <h1>Reminders</h1>
    <add-reminder
      :addReminder = 'addReminder'
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
    name: 'Home',
    created() {
      this.fetchReminders();
      this.updateNotifications();
    },
    data() {
      return {
        reminders: [],
      };
    },
    methods: {
      deleteReminder(id) {
        database('reminders').where('id', id).del()
        .then(() => this.fetchReminders())
        .catch(error => console.log(error));
      },
      addReminder(title, due, displayedNotification, e) {
        e.preventDefault();
        database('reminders').insert({ title, due, displayedNotification })
        .then(() => this.fetchReminders(e))
        .catch(error => console.log(error));
      },
      fetchReminders() {
        this.reminders = [];
        database.select().from('reminders').then((reminders) => {
          reminders.forEach((reminder) => {
            this.reminders.push(reminder);
          });
        })
        .catch(error => console.log(error));
      },
      checkForReminders() {
        database.select().from('reminders').then((reminders) => {
          if (!reminders) {
            return setTimeout(() => { this.updateNotifications(); }, 5000);
          }
        });
      },
      markReminderAsSeen(reminder) {
        database('reminders').where('id', reminder.id).update({
          displayedNotification: 1,
        })
        .catch(error => console.log(error));
      },
      createNotification(reminder) {
        const notification = new Notification('title', {
          body: reminder.title,
        });
      },
      updateNotifications() {
        this.checkForReminders();
        this.reminders.forEach((reminder) => {
          if (Date.parse(reminder.due) <= Date.now()
          && reminder.displayedNotification === 0) {
            this.markReminderAsSeen(reminder);
            this.fetchReminders();
            this.createNotification(reminder);
          }
        });
        setTimeout(() => { this.updateNotifications(); }, 5000);
      },
    },
  };
</script>
