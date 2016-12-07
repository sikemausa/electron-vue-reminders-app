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
