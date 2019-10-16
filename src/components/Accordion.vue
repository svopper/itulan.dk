<template>
  <div class="accordion">
    <div @click.prevent="active = !active" class="tab-header">
      <small>{{ tournament.platform }}</small>
      <h3>{{ tournament.title }}</h3>
      <div class="sponsor" v-if="tournament.logoPath">
        <small>by</small>
        <img :src="getImgUrl" alt />
      </div>
    </div>
    <div class="details" v-show="active">
      <hr />
      <div>
        <p v-if="isMobile || tournament.title === 'Escape Room'" v-html="tournament.description"></p>
        <iframe
          v-if="tournament.widgetUrl"
          width="100%"
          height="400px"
          :src="tournament.widgetUrl"
          frameborder="0"
        ></iframe>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      windowWidth: null
    };
  },
  props: ["tournament"],
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth < 670;
    },
    getImgUrl() {
      let path = require(`../assets/img/common/sponsor_logos/${this.tournament.logoPath}`);
      return path;
    }
  }
};
</script>

<style scoped>
.tab-header {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-header:hover {
  transition: all 0.2s;
  transform: scale(1.1);
  color: #ccc;
}

.details {
  margin-bottom: 10px;
}

h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  letter-spacing: 2px;
  font-size: 3rem;
}
hr {
  background-color: #fff;
}

.sponsor small {
  display: block;
  margin-bottom: 5px;
}

.sponsor img {
  width: 200px;
}

@media only screen and (max-width: 650px) {
  h3 {
    font-size: 2rem;
  }
}
</style>