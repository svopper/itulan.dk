import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tickets from "./views/Tickets.vue";
import Tournaments from "./views/Tournaments.vue";
import StreamComponent from "./views/Stream.vue";
import FAQ from "./views/FAQ.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "ITU LAN"
      }
    },
    {
      path: "/tickets",
      name: "tickets",
      component: Tickets,
      meta: {
        title: "ITU LAN - Tickets"
      }
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments,
      meta: {
        title: "ITU LAN - Tournaments"
      }
    },
    {
      path: "/stream",
      name: "stream",
      component: StreamComponent,
      meta: {
        title: "ITU LAN - Stream"
      }
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ,
      meta: {
        title: "ITU LAN - FAQ"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: "ITU LAN - Contact"
      }
    },
    {
      path: "*",
      component: NotFound,
      meta: {
        title: "ITU LAN - 404"
      }
    }
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
