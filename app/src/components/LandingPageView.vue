<style scoped>

</style>

<template>
  <div>
    <h1>Reminders</h1>
    <reminders></reminders>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import Reminders from './LandingPageView/Reminders';
  import Links from './LandingPageView/Links';
  import Versions from './LandingPageView/Versions';

  export default {
    components: {
      Reminders,
      Links,
      Versions,
    },
    name: 'landing-page',
  };
</script>
