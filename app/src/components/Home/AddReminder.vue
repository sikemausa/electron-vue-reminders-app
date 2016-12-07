<style scoped>
</style>

<template>
  <form>
    <input
      v-model="title"
      placeholder="Title">
    <p>Title is: {{ title }}</p>
    <button v-on:click='createReminder(title, $event)'>Add Reminder</button>
  </form>
</template>

<script>
  export default {
    props: ['createReminder'],
    data() {
      return {
        title: '',
      };
    },
    methods: {
    },
  };
</script>
