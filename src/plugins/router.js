import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Tournaments from "@/views/Tournaments.vue";
import Information from "@/views/Information.vue";
import Tickets from "@/views/Tickets.vue";
// import Partner from "@/views/Partner.vue";
import NotFound from "@/views/NotFound.vue";

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
        title: "ITU LAN",
        id: "home"
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        title: "ITU LAN - News",
        id: "news"
      }
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments,
      meta: {
        title: "ITU LAN - Tournaments",
        id: "tournaments"
      }
    },
    {
      path: "/information",
      name: "f a q",
      component: Information,
      meta: {
        title: "ITU LAN - Information",
        id: "information"
      }
    },
    // {
    //   path: "/partner",
    //   name: "partner with us",
    //   component: Partner,
    //   meta: {
    //     title: "ITU LAN - Partner with us",
    //     id: "partner"
    //   }
    // },
    {
      path: "/tickets",
      name: "buy ticket",
      component: Tickets,
      meta: {
        title: "ITU LAN - Tickets",
        id: "tickets"
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
  // const previousNearestWithMeta = from.matched
  //   .slice()
  //   .reverse()
  //   .find(r => r.meta && r.meta.metaTags);

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
