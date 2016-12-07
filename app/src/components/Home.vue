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
    ></add-reminder>
    <p> {{ reminder }} </p>
    <reminders-list
      :reminders = 'reminders'
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
        },
      };
    },
    methods: {
      createReminder(title, e) {
        e.preventDefault();
        const reminder = {
          title,
          createdAt: Date.now(),
        };
        this.reminders.push(reminder);
      },
    },
  };
</script>
