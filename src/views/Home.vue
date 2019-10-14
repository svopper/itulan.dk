<template>
  <div class="home">
    <header class="v-header container">
      <h1>25-27 October</h1>
      <button>Buy ticket</button>
      <schedule class="aaa"></schedule>
    </header>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
export default {
  components: {
    Schedule
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

a {
  color: inherit;
}

a:hover {
  color: inherit;
  text-decoration: none;
}
</style>


