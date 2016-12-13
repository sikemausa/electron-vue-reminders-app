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
  import moment from 'moment';
  const database = remote.require(path.join(process.cwd(), 'app/database.js'));
  const x = new Date();
  const timeZoneOffsetInMinutes = x.getTimezoneOffset() / 60;
  const timeZoneOffsetInMiliseconds = (timeZoneOffsetInMinutes * 3600000);
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
      addReminder(
        title,
        due,
        displayedDueNotification,
        alternateNotification,
        displayedAlternateNotification,
        e) {
        e.preventDefault();
        database('reminders').insert({
          title,
          due,
          displayedDueNotification,
          alternateNotification,
          displayedAlternateNotification })
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
      markReminderAsSeen(reminder, notification) {
        if (notification === 'due') {
          database('reminders').where('id', reminder.id).update({
            displayedDueNotification: 1,
          })
          .catch(error => console.log(error));
        }
        else if (notification === 'alternateNotification') {
          database('reminders').where('id', reminder.id).update({
            displayedAlternateNotification: 1,
          })
          .catch(error => console.log(error));
        }
      },
      createNotification(reminder) {
        const notification = new Notification('title', {
          body: reminder.title,
        });
      },
      updateNotifications(notification) {
        this.checkForReminders();
        this.reminders.forEach((reminder) => {
          const localDateInMiliseconds = (Date.parse(Date()) - timeZoneOffsetInMiliseconds);
          if (Date.parse(reminder.due) < localDateInMiliseconds
              && reminder.displayedDueNotification === 0) {
                this.markReminderAsSeen(reminder, 'due');
                this.fetchReminders();
                this.createNotification(reminder);
          }
          if (Date.parse(reminder.alternateNotification) < localDateInMiliseconds
             && reminder.displayedAlternateNotification === 0) {
                this.markReminderAsSeen(reminder, 'alternateNotification');
                this.fetchReminders();
                this.createNotification(reminder);
            }
        });
        setTimeout(() => { this.updateNotifications(); }, 5000);
      },
    },
  };
</script>
