<style scoped>
  input {
    width: 250px;
  }
  .title {
    font-size: 12pt;
    margin: 10px 0 5px 5px;
    margin-bottom: 5px;
    padding: .5px 4px;
    width: 242px;
  }
  .datePicker {
    font-size: 10pt;
    margin-left: 4pt;
    text-align: center;
  }
  .addButton {
    width: 100px;
    font-size: 10pt;
    height: 25px;
    border-radius: 5px;
    outline: none;
    margin-top: 7px;
    border-style: hidden;
    background-color: #009688;
    color: #FFF;
  }
  .addButton:hover {
    background-color: #00635A;
  }
  .addButton:disabled {
    color: #999;
  }
  .addButton:hover:disabled {
    background-color: #009688;
  }
</style>

<template>
  <form>
    Text:
    <input
      v-model="title"
      placeholder="Title"
      class="title"
    /><br/>
    Due:
    <input
      type="datetime-local"
      v-model="due"
      class="datePicker"
    /></br>
    <button
      v-bind:disabled="(title === '')"
      v-on:click='createReminder(title, due, $event)'
      class="addButton"
    >Add Reminder</button>
  </form>
</template>

<script>
  export default {
    props: ['createReminder'],
    data() {
      return {
        title: '',
        due: null,
      };
    },
    methods: {
    },
  };
</script>
