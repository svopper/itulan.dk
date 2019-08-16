<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="router-view" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
.router-view {
  background-color: #fff;
  color: #000;
  height: 80vh;
  overflow-x: scroll;
  margin: 0 5%;
  padding: 2rem;
  position: relative;
}

@media only screen and (max-width: 800px) {
  .router-view {
    height: 100%;
    overflow-x: hidden;
    margin: 15px 2% 50px 2%;
  }
}
</style>
