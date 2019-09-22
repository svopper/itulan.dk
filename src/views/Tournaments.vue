<template>
  <div class="tournaments">
    <h1 class="title" data-aos="fade-up">{{ $t('tournaments.title') }}</h1>
    <p data-aos="fade-up" data-aos-delay="200">{{ $t('tournaments.description') }}</p>
    <div v-if="!isPublic">
      <h3 data-aos="fade-up" data-aos-delay="300">{{ $t('tournaments.notPublic') }}</h3>
    </div>
    <div v-else class="tournaments-wrapper">
      <div v-for="t in tournaments" :key="t.url">
        <h3>{{ t.title }}</h3>
        <small class="platform">{{ $t('tournaments.tournamentCards.platformLabel') }} {{t.platform}}</small>
        <iframe width="100%" height="88" :src="t.url" allowfullscreen frameborder="0"></iframe>
        <p v-if="t.description">{{ t.description }}</p>
        <p v-else>{{ $t('tournaments.tournamentCards.descriptionTBA') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isPublic() {
      return new Date() > new Date("2019-10-03T00:00:00");
    }
  },
  data() {
    return {
      tournaments: this.$t("tournaments.tournamentCards.tournaments")
    };
  }
};
</script>

<style scoped>
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

@media only screen and (max-width: 750px) {
  .tournaments-wrapper {
    margin-bottom: 3rem;
  }
}
</style>