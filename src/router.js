import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tickets from "./views/Tickets.vue";
import Tournaments from "./views/Tournaments.vue";
import StreamComponent from "./views/Stream.vue";
import FAQ from "./views/FAQ.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tickets",
      name: "tickets",
      component: Tickets
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments
    },
    {
      path: "/stream",
      name: "stream",
      component: StreamComponent
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    },
    {
      path: "/Contact",
      name: "contact",
      component: Contact
    }
  ]
});
