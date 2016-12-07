<style scoped>
</style>

<template>
  <form>
    <input
      ref="input"
      v-bind:reminder="activeReminder"
      v-on:input="updateReminder($event.target.value)"
      placeholder="Name">
    <p>Name is: {{ name }}</p>
  </form>
</template>

<script>
  export default {
    props: ['activeReminder'],
    data() {
      return {
        name: '',
      };
    },
    methods: {
      // updateReminder: (activeReminder) => {
      //
      // },
    },
  };
</script>
