import Vue from "vue";
import VueI18n from "vue-i18n";
import enUS from "./locales/en-US";

Vue.use(VueI18n);

const messages = {
  en: {
    message: enUS
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en",
  messages
});

export default i18n;
