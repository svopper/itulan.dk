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
      <div class="accordion-wrapper">
        <accordion v-for="t in tournaments" :key="t.url" :tournament="t" />
      </div>
    </div>
    <div v-else>
      <h3 data-aos="fade-up" data-aos-delay="300">{{ $t('tournaments.notPublic') }}</h3>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  components: {
    Accordion
  },
  mounted() {
    this.test = Boolean(this.$route.query.test);
  },
  computed: {
    isPublic() {
      return true; // TODO Set to proper announcement date when known
    },
    tournaments() {
      let tournaments = this.$t("tournaments.tournamentCards.tournaments");
      // this is comment
      tournaments.sort((a, b) => {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      return tournaments;
    }
  },
  data() {
    return {
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

.accordion-wrapper {
  margin-top: 20px;
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
  animation: pulsate 1.5s infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 750px) {
  .tournaments-wrapper {
    margin-bottom: 3rem;
  }
}
</style>