<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png"
        aria-hidden="true" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link>  Building your first robot!
    </div>   
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.robot {
  height:300px;
}

</style>

<!--
component name should 2 words at minimum

no need to restart server 
Vue CLI is using webpack DevServer,including Hot Module Replacement

this is a single-file Components

this file is built by webpack to generate HTML,JavaScript and CSS

A new page means a new component

-->
