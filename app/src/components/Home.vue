<style scoped>
  h1 {
    height: 35px;
    width: 400px;
    background-color: #455A64;
    color: #FFF;
    font-size: 1.7em;
    font-weight: 700;
  }
</style>

<template>
  <div>
    <h1>Reminders</h1>
    <add-reminder
      :createReminder = 'createReminder'
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

  export default {
    components: {
      RemindersList,
      AddReminder,
    },
    name: 'landing-page',
    data() {
      return {
        reminders: [],
        activeReminder: {
          title: '',
          createdAt: null,
          due: null,
        },
      };
    },
    methods: {
      createReminder(title, due, e) {
        e.preventDefault();
        const reminder = {
          title,
          createdAt: Date.now(),
          due,
        };
        this.reminders.push(reminder);
      },
      deleteReminder(createdAt) {
        for (let i = 0; i < this.reminders.length; i++) {
          if (this.reminders[i].createdAt === createdAt) {
            this.reminders.splice(i, 1);
          }
        }
      },
    },
  };
</script>
