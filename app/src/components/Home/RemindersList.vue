<style scoped>
</style>

<template>
  <ul id="example-1">
    <li v-for="reminder in reminders">
      {{ reminder }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['reminders'],
  };
</script>
