<template>
  <div>
    <div class="fb-post">
      <p class="date">{{ date }}</p>
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "message"]
};
</script>

<style scoped>
.fb-post {
  margin: 1rem auto;
  padding: 0.4rem 3rem;
  border: 4px #2f3eac solid;
}

.message {
  font-size: 2.5rem;
  margin-top: 0px;
}

.date {
  /* float: right; */
}
</style>