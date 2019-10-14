<template>
  <div class="home">
    <header class="v-header container">
      <h1>25-27 October</h1>
      <h2
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="200"
        class="hollow-text"
      >{{ $t("home.date.season") }}</h2>
      <span class="powered-by">{{ $t('home.poweredBy') }}</span>
      <a id="logo-link" href="https://www.kmd.dk" target="_blank" rel="noopener">
        <img id="kmd_logo" src="../assets/img/common/sponsor_logos/KMD_WHITE.png" alt />
      </a>
      <div>
        <hyperlink class="button" url="/tickets">Buy ticket</hyperlink>
      </div>

      <schedule></schedule>
    </header>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Hyperlink from "@/components/Hyperlink.vue";
export default {
  components: {
    Schedule,
    Hyperlink
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.home {
  margin: 150px auto;
  text-align: center;
}

.button {
  outline: 2px solid #fff;
  animation: border-pulsate 2s infinite;
  margin: 20px 0px;
}

.powered-by {
  display: block;
  font-style: italic;
  margin-bottom: 10px;
}

#kmd_logo {
  width: 300px;
  display: inline-block;
}

#logo-link {
  margin-bottom: 20px;
}

@media only screen and (max-width: 770px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    padding-bottom: 0;
  }

  #kmd_logo {
    width: 250px;
    display: inline-block;
  }
}
</style>


