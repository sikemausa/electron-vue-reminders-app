<style scoped>
</style>

<template>
  <ul id="example-1">
    <li v-for="reminder in reminders">
      <div v-on:click='deleteReminder(reminder.createdAt)'>
        {{ reminder.title }}
        {{ reminder.due }}
      </div>
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
        return moment(parsedDate);
      },
    },
  };
</script>
