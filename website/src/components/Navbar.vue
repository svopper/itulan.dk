<template>
  <b-navbar class="navbar" v-bind:class="{open: navOpen}" toggleable type="dark" variant="info">
    <b-navbar-brand href="/">
      <router-link class="router-link" to="/">
        <span @click="closeMenu" class="router-link-home">ITU LAN</span>
      </router-link>
    </b-navbar-brand>
    <div>
      <span v-show="!navOpen">
        Click!
        <img id="menu-finger" width="25px" src="../assets/img/common/finger-right.svg" alt />
      </span>
      <button
        @click="toggleOpen"
        target="nav-collapse"
        aria-label="Toggle navigation"
        aria-controls="nav-collapse"
        aria-expanded="false"
        v-bind:class="{'is-active': navOpen}"
        class="hamburger hamburger--collapse"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <b-collapse v-model="navOpen" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <span v-for="route in routes" :key="route.name" :id="`link-${route.meta.id}`">
          <router-link class="router-link" :to="route.path">
            <span @click="toggleOpen" class="router-link-text">{{ route.name }}</span>
          </router-link>
        </span>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="some-buttons ml-auto">
        <b-nav-item
          class="some-button"
          href="https://discord.gg/nSFXWQN"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/img/common/socialmedia/discord_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.facebook.com/itulan"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/img/common/socialmedia/facebook_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.instagram.com/itulan/"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/img/common/socialmedia/insta_icon.svg" height="25px" />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.youtube.com/channel/UCa8UEVBGtOfykw6N9G6db8g"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/img/common/socialmedia/youtube_icon.png" height="20px" />
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
  BNavbarBrand,
} from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavbarBrand,
  },
  data() {
    return {
      windowWidth: null,
      navOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      this.navOpen = !this.navOpen;
    },
    closeMenu() {
      this.navOpen = false;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth < 1260;
    },
    routes() {
      let allRoutes = this.$router.options.routes;
      let relevantRoutes = allRoutes.filter((r) => {
        return r.name !== "home" && r.name !== undefined;
      });
      return relevantRoutes;
    },
  },
};
</script>


<style scoped>
.navbar {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

#menu-finger {
  -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate;
}
@-webkit-keyframes action {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
}
@keyframes action {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
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

.some-buttons {
  flex-direction: initial;
  justify-content: center;
}

.some-button {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin: 1rem 20px;
}

.some-button:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.4);
}

.navbar-brand {
  text-decoration: none !important;
}

.router-link {
  margin: 0 2rem;
  color: #fff;
  text-decoration: none;
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

.router-link:hover :not(.router-link-home) {
  color: #fff;
}

.router-link-text {
  text-transform: capitalize;
  font-family: "Anton", Arial, Helvetica, sans-serif;
  text-align: center;
  line-height: 0.5;
}

.router-link-home {
  font-family: Anton, Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
}

.router-link-active span:not(.router-link-home) {
  color: inherit;
}

#nav-collapse {
  border-bottom: 1px solid white;
}
</style>