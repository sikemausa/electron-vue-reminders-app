<style scoped>
</style>

<template>
  <form>
    <input
      v-model="title"
      placeholder="Title">
    <input type="datetime-local"
      v-model="due">
    <button v-on:click='createReminder(title, due, $event)'>Add Reminder</button>
    <button v-on:click='addReminder(title, due, createdAt, $event)'>Add that shit yo</button>
    <button v-on:click='fetchReminders($event)'>Fetch that shit yo</button>
  </form>
</template>

<script>
  export default {
    props: ['createReminder', 'addReminder', 'fetchReminders'],
    data() {
      return {
        title: '',
        due: null,
        createdAt: null,
      };
    },
    methods: {
    },
  };
</script>
