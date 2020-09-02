<template>
  <div data-aos="fade-up" class="corona">
    <h1 class="title" data-aos="fade-up">{{ $t("corona.title") }}</h1>
    <small>{{ $t("corona.disclaimer") }}</small>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.corona {
  text-align: left;
}

.title {
  margin-bottom: 3rem;
}

p {
  letter-spacing: initial;
}
</style>
