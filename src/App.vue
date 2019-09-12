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
</style>
