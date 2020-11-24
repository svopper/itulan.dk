<template>
  <nav class="bg-transparent">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Dashboard</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div class="hidden sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Dashboard</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Team</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Calendar</a>
    </div>
  </div>
</nav>
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
      if (this.isMobile) {
        this.mobileNavOpen = !this.mobileNavOpen;
      }
    },
    closeMenu() {
      this.mobileNavOpen = false;
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
    },
    routes() {
      let allRoutes = this.$router.options.routes;
      let relevantRoutes = allRoutes.filter(r => {
        return r.name !== "home" && r.name !== undefined;
      });
      return relevantRoutes;
    }
  }
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