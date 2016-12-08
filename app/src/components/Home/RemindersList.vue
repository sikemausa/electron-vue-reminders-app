<style scoped>
</style>

<template>
  <ul id="example-1">
    <li v-for="reminder in reminders">
      <h3 class="reminder-title">{{ reminder.title }}</h3>
      <span class="due">Due: </span>{{ formatDate(reminder.due) }}
      <button v-on:click='deleteReminder(reminder.createdAt)'>✖️</button>
    </li>
  </ul>
</template>

<script>
  import moment from 'moment';

  export default {
    props: ['reminders', 'deleteReminder'],
    methods: {
      formatDate(date) {
        const parsedDate = Date.parse(date);
        return moment(parsedDate).format('MM/D/YY, h:mm:ss a');
      },
    },
  };
</script>
