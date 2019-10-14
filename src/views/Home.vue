<template>
  <div class="home">
    <header class="v-header container">
      <h1>25-27 October</h1>
      <hyperlink class="button" url="/tickets">Buy ticket</hyperlink>
      <schedule></schedule>
    </header>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Hyperlink from "@/components/Hyperlink.vue";
export default {
  components: {
    Schedule,
    Hyperlink
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.home {
  margin: 150px auto;
  text-align: center;
}

.button {
  outline: 2px solid #fff;
  animation: border-pulsate 2s infinite;
}
</style>


