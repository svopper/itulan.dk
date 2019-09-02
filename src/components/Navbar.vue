<template>
  <b-navbar
    class="navbar"
    v-bind:class="{open: isMobile && mobileNavOpen}"
    toggleable="lg"
    type="dark
  "
    variant="info"
  >
    <b-navbar-brand href="/">
      <router-link class="router-link" to="/">
        <span class="router-link-home">ITU LAN</span>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle @click="toggleOpen" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="router-link" to="/news">
          <span class="router-link-text">News</span>
        </router-link>
        <router-link class="router-link" to="/tournaments">
          <span class="router-link-text">Tournaments</span>
        </router-link>
        <router-link class="router-link" to="/information">
          <span class="router-link-text">Information</span>
        </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="some-buttons ml-auto">
        <b-nav-item class="some-button" href="https://discord.gg/nSFXWQN">
          <img src="../assets/img/discord_icon.svg" height="30px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.facebook.com/itulan">
          <img src="../assets/img/facebook_icon.svg" height="30px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.instagram.com/itulan/">
          <img src="../assets/img/insta_icon.svg" height="30px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.twitch.tv/itulan">
          <img src="../assets/img/twitch_icon.svg" height="30px" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
export default {
  data() {
    return {
      windowWidth: null,
      mobileNavOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.mobileNavOpen = !this.mobileNavOpen;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992;
    }
  }
};
</script>


<style scoped>
.navbar {
  z-index: 100;
}
.bg-info {
  background-color: transparent !important;
}

.open {
  background-color: #031d44 !important;
}

.some-button {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.some-button:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.4);
}

.router-link {
  margin: 0 2rem;
  color: #fff;
  text-decoration: none;
}

.router-link-home {
  font-family: Anton, Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
}

.router-link-active span:not(.router-link-home) {
  color: #0800ff;
}

@media only screen and (max-width: 992px) {
  .some-buttons {
    flex-direction: initial;
    justify-content: space-evenly;
  }

  .router-link-text {
    font-family: "Anton", Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .router-link-active span {
    color: inherit !important;
  }

  .router-link :not(.router-link-home) {
    margin: 0 auto;
    font-size: 3rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }
}
</style>