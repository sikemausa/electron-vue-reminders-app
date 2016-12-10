<style scoped>
</style>

<template>
  <form>
    <input
      v-model="title"
      placeholder="Title">
    <input type="datetime-local"
      v-model="due">
    <button v-on:click='addReminder(title, due, createdAt, $event)'>Add Reminder</button>
  </form>
</template>

<script>
  export default {
    props: ['addReminder'],
    data() {
      return {
        title: '',
        due: null,
        createdAt: null,
      };
    },
  };
</script>
