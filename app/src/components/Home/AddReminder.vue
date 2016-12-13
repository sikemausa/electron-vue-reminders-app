<style scoped>
input {
  width: 250px;
}
.title {
  font-size: 12pt;
  margin: 2px 0 3px 5px;
  padding: .5px 4px;
  width: 242px;
}
.datePicker {
  font-size: 10pt;
  margin: 2px 0 5px 5px;
  text-align: center;
}
.addButton {
  background-color: #009688;
  border-radius: 5px;
  border-style: hidden;
  color: #FFFFFF;
  font-size: 10pt;
  height: 25px;
  margin-bottom: 7px;
  margin-top: 7px;
  outline: none;
  width: 100px;
}
.addButton:hover {
  background-color: #00635A;
}
.addButton:disabled {
  color: #999999;
}
.addButton:hover:disabled {
  background-color: #009688;
}
</style>

<template>
  <form>
    Title:
    <br />
    <input
      v-model='title'
      placeholder='Title'
      class='title'
    >
    <br />
    Notify On:
    <br />
    <input
      type='datetime-local'
      max = '9999-12-31T23:59:59'
      v-model='due'
      class='datePicker'
    >
    <br />
    Secondary Notification:
    <br />
    <input
      type='datetime-local'
      max = '9999-12-31T23:59:59'
      v-model='alternateNotification'
      class='datePicker'
    ><br />
    <button
      v-on:click='addReminder(title, due, displayedDueNotification, alternateNotification, displayedAlternateNotification, $event);
                  clearInputs();'
      v-bind:disabled='(title === "" || due === null)'
      class='addButton'
    >Add Reminder
    </button>
  </form>
</template>

<script>
  export default {
    props: ['addReminder'],
    data() {
      return {
        title: '',
        due: null,
        alternateNotification: null,
        displayedDueNotification: false,
        displayedAlternateNotification: false,
      };
    },
    methods: {
      clearInputs() {
        this.title = '';
        this.due = null;
        this.alternateNotification = null;
      },
    },
  };
</script>
