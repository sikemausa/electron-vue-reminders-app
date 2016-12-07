<style scoped>

</style>

<template>
  <div>
    <h1>Reminders</h1>
    <reminders
        :reminders = 'reminders'
    ></reminders>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import Reminders from './LandingPageView/Reminders';

  export default {
    components: {
      Reminders,
    },
    name: 'landing-page',
    data() {
      return {
        reminders: ['sfdgsdf1', 'asdgsdag2', 'sadfasdf3'],
      };
    },
  };
</script>
