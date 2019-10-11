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
.router-view:not(.home) {
  max-width: 800px;
  margin: 150px auto;
  text-align: center;
}

@media only screen and (max-width: 750px) {
  .router-view:not(.home) {
    padding: 15px;
    margin: 80px auto;
  }
}
</style>
