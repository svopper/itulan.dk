<template>
  <b-navbar
    class="navbar"
    v-bind:class="{ open: isMobile && mobileNavOpen }"
    toggleable="lg"
    type="dark"
    variant="info"
  >
    <router-link class="router-link" to="/">
      <span @click="closeMenu" class="router-link-home">
        <img
          src="../assets/img/common/navbar_logo2.png"
          alt="ITU LAN logo"
          height="30px"
          width="auto"
          loading="lazy"
        />
      </span>
    </router-link>

    <button
      v-show="isMobile"
      @click="toggleOpen"
      target="nav-collapse"
      aria-label="Toggle navigation"
      aria-controls="nav-collapse"
      aria-expanded="false"
      v-bind:class="{ 'is-active': mobileNavOpen }"
      class="hamburger hamburger--collapse"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <b-collapse v-model="mobileNavOpen" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <span
          v-for="route in routes"
          :key="route.name"
          v-bind:class="{ desktop: !isMobile }"
          :id="`link-${route.meta.id}`"
        >
          <router-link class="router-link" :to="route.path">
            <span @click="toggleOpen" class="router-link-text">{{
              route.name
            }}</span>
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
          <img
            alt="Discord logo"
            src="../assets/img/common/socialmedia/discord_icon.svg"
            height="25px"
            loading="lazy"
          />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.facebook.com/itulan"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="Facebook logo"
            src="../assets/img/common/socialmedia/facebook_icon.svg"
            height="25px"
            loading="lazy"
          />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.instagram.com/itulan/"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="Instagram logo"
            src="../assets/img/common/socialmedia/insta_icon.svg"
            height="25px"
            loading="lazy"
          />
        </b-nav-item>
        <b-nav-item
          class="some-button"
          href="https://www.youtube.com/channel/UCa8UEVBGtOfykw6N9G6db8g"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="YouTube logo"
            src="../assets/img/common/socialmedia/youtube_icon.png"
            height="20px"
            loading="lazy"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItem,
  },
  data() {
    return {
      windowWidth: null,
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      if (this.isMobile) {
        this.mobileNavOpen = !this.mobileNavOpen;
      }
    },
    closeMenu() {
      this.mobileNavOpen = false;
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
      return this.windowWidth < 992;
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

.navbar-brand {
  text-decoration: none !important;
}

.router-link {
  margin: 0 2rem;
  color: #fff;
  text-decoration: none;
}

.router-link :not(.router-link-home) {
  font-size: 14px;
}

.router-link-text {
  text-transform: uppercase;
}

.router-link-home {
  font-family: Anton, Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
}

.router-link-active span:not(.router-link-home) {
  color: #808080;
}

#link-tickets.desktop {
  margin-left: 80px;
}

#link-tickets.desktop::after {
  content: "<";
}

#link-tickets.desktop::before {
  content: ">";
}

@media only screen and (max-width: 1126px) {
  .router-link {
    margin: 0 1.5rem;
  }
}

@media only screen and (max-width: 1030px) {
  .router-link {
    margin: 0 1.3rem;
  }
}

@media only screen and (max-width: 992px) {
  .some-buttons {
    flex-direction: initial;
    justify-content: center;
  }

  .router-link-text {
    font-family: "Anton", Arial, Helvetica, sans-serif;
    text-align: center;
    line-height: 0.5;
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
  .router-link:hover :not(.router-link-home) {
    color: #fff;
    -webkit-text-stroke-width: initial;
    -webkit-text-stroke-color: initial;
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