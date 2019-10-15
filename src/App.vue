<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="router-view" />
    <cookie-law theme="dark-lime">
      <div
        slot="message"
      >Hey, GAMER! We use cookies, but ONLY to analyze the user traffic generated on our website. By clicking 'Got it!' or using our site, you consent to the use of cookies unless you have disabled them.</div>
    </cookie-law>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import CookieLaw from "vue-cookie-law";
export default {
  components: {
    Navbar,
    CookieLaw
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

.Cookie__button {
  background: #0800ff !important;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.Cookie__button:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.1);
}
</style>
