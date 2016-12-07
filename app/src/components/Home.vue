<style scoped>
  h1 {
    width: 100%;
    background-color: grey;
  }
</style>

<template>
  <div>
    <h1>Reminders</h1>
    <reminders-list
        :reminders = 'reminders'
        :reminder = 'reminder'
    ></reminders-list>
    <add-reminder
      :activeReminder = 'activeReminder'
    ></add-reminder>
    <p> {{ reminder }} </p>
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
        reminder: 'yo',
        reminders: [],
        activeReminder: {
          name: '',
          createdAt: null,
        },
      };
    },
    methods: {
      addReminder: () => {
        const reminder = () => {
          return {
            name: '',
            createdAt: Date.now(),
          }
        };
        this.reminders.push(activeReminder);
      },
    },
  };
</script>
