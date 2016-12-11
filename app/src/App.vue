<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:400, 700);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    background: #CFD8DC;
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
</style>

<template>
  <div>
    <landing-page></landing-page>
  </div>
</template>

<script>
  import LandingPage from './components/Home';
  export default {
    components: {
      LandingPage,
    },
  };
</script>
