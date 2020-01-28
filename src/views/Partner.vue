<template>
  <div>
    <div class="title-wrapper">
      <h1>{{ $route.name }}</h1>
      <h2 class="hollow-text">Become a sponsor</h2>
    </div>

    <div class="flex-wrapper">
      <div id="image"></div>
      <div id="text">
        <h3>About us</h3>
        <p>
          ITU LAN is a non-profit university organization. We host a biannual
          LAN party at the IT Unitversity with more than 300 students
          participating in each event.
        </p>
        <p>
          Sponsorships are a key part of making each LAN party a fun event,
          which is why we are looking for companies or organizations of interest
          to either sponsor tournament prizes or activities for all ITU LAN
          participants. <a target="_blank" :href="pdf">Read more (PDF).</a>
        </p>

        <br />
        <hyperlink url="mailto:pr@itulan.dk"
          >Interested? Please contact Kenneth Nielsen -> pr@itulan.dk</hyperlink
        >
      </div>
    </div>
  </div>
</template>

<script>
import Hyperlink from "@/components/Hyperlink";
export default {
  data() {
    return {
      pdf: require("../assets/docs/ITU-LAN-sponsor-folder-S20.pdf")
    };
  },
  components: {
    Hyperlink
  }
};
</script>

<style scoped>
.title-wrapper {
  margin-bottom: 5rem;
}

h3 {
  margin-top: 0px;
  text-align: left;
}

.flex-wrapper {
  display: flex;
  margin-bottom: 3rem;
}

#text {
  text-align: left;
  letter-spacing: 0px;
  padding-left: 30px;
}

.flex-wrapper > div {
  padding: 0px 20px;
}

.flex-wrapper > #image {
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/img/partner/cover.png");
  width: 100%;
}

@media only screen and (max-width: 750px) {
  .title-wrapper {
    margin-bottom: 1rem;
  }

  .flex-wrapper {
    flex-direction: column-reverse;
  }

  .flex-wrapper > div {
    padding: 20px 0px;
  }

  .flex-wrapper > #image {
    width: initial;
    height: 300px;
  }

  #text {
    padding-left: initial;
  }
}
</style>
