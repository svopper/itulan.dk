import Vue from "vue";
import VueI18n from "vue-i18n";
import locale from "./locale";

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en",
  messages: locale
});

export default i18n;
