<style scoped>
  ul {
    height: 279px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  li {
    border-bottom: 1px solid #009688;
    margin: 5px 10px 0;
    text-decoration: none;
  }
  .reminder-title {
    color: #212121;
    margin-bottom: 5px;
    word-wrap: break-word;
  }
  .date-button{
    display:flex;
    justify-content: center;
  }
  .reminder-dates{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
  .due{
    color: #212121;
    font-size: .9em;
    flex-basis: auto;
    margin-bottom: -15px;
  }
  .due2{
    color: #212121;
    font-size: .9em;
  }
  .remove-button {
    align-self: center;
    background-color: #CFD8DC;
    border: none;
    outline: none;
    margin: 0 0 2px 20px;
    height: 20px;
  }
  .remove-button:hover {
    background-color: #F44336;
    border-radius: 2px;
  }
</style>

<template>
  <ul id='reminders-list'>
    <li v-for='reminder in reminders'>
      <h3 class='reminder-title'>{{ reminder.title }}</h3>
      <span class='date-button'>
        <span class='reminder-dates'>
          <span class='due'>
            {{ formatDate(reminder.due) }}
          </span><br />
          <span class='due2'>
            {{ formatDate(reminder.alternateNotification) }}
          </span>
        </span>
        <button
          v-on:click='deleteReminder(reminder.id)'
          class='remove-button'
        >✖️</button>
      </span>
    </li>
  </ul>
</template>

<script>
  import moment from 'moment';

  export default {
    props: ['reminders', 'deleteReminder'],
    methods: {
      formatDate(date) {
        if (date !== null) return moment(date).format('MMMM Do YYYY, h:mm');
        else return '';
      },
    },
  };
</script>
