<template>
  <div class="home">
    <header class="v-header container">
      <h1>25-27 Oct / Fall 2019</h1>
      <small class="powered-by">{{ $t('home.poweredBy') }}</small>
      <a id="logo-link" href="https://www.kmd.dk" target="_blank" rel="noopener">
        <img id="kmd_logo" src="../assets/img/common/sponsor_logos/KMD_WHITE.png" alt />
      </a>
      <div>
        <hyperlink class="button" url="/tickets">Buy ticket</hyperlink>
      </div>
      <schedule id="schedule"></schedule>
      <sponsor-bar id="sponsor-bar"></sponsor-bar>
    </header>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule.vue";
import Hyperlink from "@/components/Hyperlink.vue";
import SponsorBar from "@/components/SponsorBar.vue";
export default {
  components: {
    Schedule,
    Hyperlink,
    SponsorBar
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-size: 5rem;
}

.home {
  margin: 150px auto;
  text-align: center;
}

.button {
  margin: 20px 0px;
}

.powered-by {
  font-style: italic;
  margin-bottom: 10px;
}

#kmd_logo {
  width: 140px;
  display: inline-block;
}

#logo-link {
  margin-bottom: 20px;
}

#schedule {
  margin-top: 50px;
}

#sponsor-bar {
  width: 100%;
  margin-top: 20px;
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
    display: inline-block;
  }
}
</style>


