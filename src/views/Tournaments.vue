<template>
  <div class="tournaments">
    <h1 class="title" data-aos="fade-up">{{ $t('tournaments.title') }}</h1>
    <p data-aos="fade-up" data-aos-delay="200">{{ $t('tournaments.description') }}</p>
    <div v-if="isPublic || test" class="tournaments-wrapper">
      <small>
        <i>{{ $t('tournaments.clickAndRegister') }}</i>
      </small>
      <br />
      <img class="hand" width="25px" src="../assets/img/common/finger-down.svg" alt />
      <accordion v-for="t in tournaments" :key="t.url" :tournament="t" />
    </div>
    <div v-else>
      <h3 data-aos="fade-up" data-aos-delay="300">{{ $t('tournaments.notPublic') }}</h3>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion";
export default {
  components: {
    Accordion
  },
  mounted() {
    this.test = Boolean(this.$route.query.test);
  },
  computed: {
    isPublic() {
      return new Date() > new Date("2019-10-03T00:00:00");
    }
  },
  data() {
    return {
      tournaments: this.$t("tournaments.tournamentCards.tournaments"),
      test: false
    };
  }
};
</script>

<style scoped>
.tournaments {
  max-width: 800px;
}
.tournament-wrapper {
  background-color: #444546;
  height: 72px;
  width: 100%;
  margin-bottom: 15px;
}

.tournaments-wrapper {
  margin-bottom: 7rem;
}

.platform {
  display: block;
  margin-bottom: 10px;
}

.hand {
  margin: 10px 0px;
}

@media only screen and (max-width: 750px) {
  .tournaments-wrapper {
    margin-bottom: 3rem;
  }
}
</style>