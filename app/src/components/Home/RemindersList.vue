<style scoped>
  ul {
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 350px;
  }
  li {
    border-bottom: 1px solid #009688;
    margin: 5px 10px 0;
  }
  .reminder-title {
    color: #212121;
    margin-bottom: 5px;
    word-wrap: break-word;
  }
  .due{
    color: #212121;
    font-size: .9em;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .remove-button {
    background-color: #CFD8DC;
    border: none;
    outline: none;
  }
</style>

<template>
  <ul id="reminders-list">
    <li v-for="reminder in reminders">
      <h3 class="reminder-title">{{ reminder.title }}</h3>
      <span class="due">{{ formatDate(reminder.due) }}</span>
      <button
        v-on:click='deleteReminder(reminder.id)'
        class="remove-button"
      >✖️</button>
    </li>
  </ul>
</template>

<script>
  import moment from 'moment';

  export default {
    props: ['reminders', 'deleteReminder'],
    methods: {
      formatDate(date) {
        return moment(date).format('MMMM Do YYYY, h:mm');
      },
    },
  };
</script>
