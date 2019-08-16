<template>
  <nav id="nav">
    <router-link class="router-link" to="/">
      <span class="router-link-text">Home</span>
    </router-link>
    <router-link class="router-link" to="/tickets">
      <span class="router-link-text">Tickets</span>
    </router-link>
    <router-link class="router-link" to="/tournaments">
      <span class="router-link-text">Tournaments</span>
    </router-link>
    <router-link class="router-link" to="/stream">
      <span class="router-link-text">Stream</span>
    </router-link>
    <router-link class="router-link" to="/faq">
      <span class="router-link-text">FAQ</span>
    </router-link>
    <router-link class="router-link" to="/contact">
      <span class="router-link-text">Contact</span>
    </router-link>
  </nav>
</template>

<style>
.router-link {
  color: #fff;
}

.router-link::after {
  content: " | ";
}

.router-link:last-child:after {
  content: "";
}

#nav {
  padding: 30px 30px 15px 30px;
  text-align: center;
}

#nav a {
  text-decoration: none;
}

#nav a span {
  font-weight: bold;
  color: #fff;
  padding: 1rem 1rem;
  letter-spacing: 5px;
}

#nav a:visited {
  text-decoration: none;
}

#nav a:active {
  text-decoration: none;
}

#nav a.router-link-exact-active span {
  color: #2f3eac;
  background-color: #fff;
}

@media only screen and (max-width: 800px) {
}
@media only screen and (max-width: 970px) {
  #nav a span {
    letter-spacing: initial;
  }
}
</style>