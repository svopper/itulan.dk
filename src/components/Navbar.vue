<template>
  <b-navbar toggleable="lg" type="dark
  " variant="info">
    <b-navbar-brand href="#">
      <router-link class="router-link" to="/">
        <span class="router-link-home">ITU LAN</span>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://discord.gg/nSFXWQN">
          <img src="http://itulan.dk/wp-content/themes/itulan/discord_icon.svg" height="30px" />
        </b-nav-item>
        <b-nav-item href="https://www.facebook.com/itulan/?view_public_for=525246807557955">
          <img src="http://itulan.dk/wp-content/themes/itulan/facebook_icon.svg" height="30px" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<style scoped>
.bg-info {
  background-color: transparent !important;
}

.router-link {
  margin: 0 2rem;
  color: #fff;
}

.router-link-home {
  font-family: Anton, Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
}
</style>