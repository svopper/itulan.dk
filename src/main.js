import Vue from "vue";
import AOS from "aos";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/general-style.css";
import "./assets/css/normalize.css";
import "./assets/css/hamburgers.css";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

AOS.init();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
