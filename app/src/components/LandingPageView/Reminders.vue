<style scoped>
</style>

<template>
  <ul id='example-1'>
    <li v-for='reminder in reminders'>
      {{reminder.title}}
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';

  const example1 = new Vue({
    el: '#example-1',
    data: {
      reminders: [
        { title: 'hello' },
        { title: 'goodbye' },
      ],
    },
  });

  export default example1;
</script>
