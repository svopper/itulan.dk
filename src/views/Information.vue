<template>
  <div class="information">
    <h1 class="title" data-aos="fade-up">{{ $t('information.title') }}</h1>
    <div id="top"></div>
    <div v-for="t in topics" :key="t.index" :id="t.id" data-aos="fade-up">
      <h3>{{ t.topic }}</h3>
      <p v-for="(p, index) in t.paragraphs" :key="index" v-html="p"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: this.$t("information.subjects")
    };
  }
};
</script>

<style scoped>
.information {
  text-align: left;
}

p {
  letter-spacing: initial;
}

.address > p {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
}
</style>