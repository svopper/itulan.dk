<template>
  <b-navbar
    class="navbar"
    v-bind:class="{open: isMobile && mobileNavOpen}"
    toggleable="lg"
    type="dark"
    variant="info"
  >
    <b-navbar-brand href="/">
      <router-link class="router-link" to="/">
        <span class="router-link-home">ITU LAN</span>
      </router-link>
    </b-navbar-brand>

    <button
      v-show="isMobile"
      @click="toggleOpen"
      target="nav-collapse"
      aria-label="Toggle navigation"
      aria-controls="nav-collapse"
      aria-expanded="false"
      v-bind:class="{'is-active': mobileNavOpen}"
      class="hamburger hamburger--collapse"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <b-collapse v-model="mobileNavOpen" id="nav-collapse" is-nav>
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
        <router-link class="router-link" to="/tickets">
          <span class="router-link-text">Tickets</span>
        </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="some-buttons ml-auto">
        <b-nav-item class="some-button" href="https://discord.gg/nSFXWQN" target="_blank">
          <img src="../assets/img/discord_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.facebook.com/itulan" target="_blank">
          <img src="../assets/img/facebook_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.instagram.com/itulan/" target="_blank">
          <img src="../assets/img/insta_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item class="some-button" href="https://www.youtube.com/itulan" target="_blank">
          <img src="../assets/img/youtube_icon.png" height="20px" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import {
  BNavbar,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavbarBrand
} from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavbarBrand
  },
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
    this.windowWidth = window.innerWidth;

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

button {
  outline: none !important;
}

.navbar-dark .navbar-toggler {
  border: none !important;
}

.navbar-dark .navbar-toggler-icon {
  color: #fff !important;
}

.navbar-toggler-icon {
  color: #fff !important;
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
  margin: 0 5px;
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

.router-link :not(.router-link-home) {
  font-size: 14px;
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
    justify-content: center;
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
    font-size: 2.5rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    letter-spacing: 4px;
    text-transform: uppercase;
    display: block;
  }

  .router-link-active :not(.router-link-home) {
    color: initial;
    -webkit-text-stroke-width: initial;
    -webkit-text-stroke-color: initial;
  }

  .some-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>