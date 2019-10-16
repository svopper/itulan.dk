<template>
  <div class="sponsor-bar">
    <span>
      <small>powered by</small>
    </span>
    <span>
      <hyperlink url="https://www.kmd.dk">
        <img src="../assets/img/common/sponsor_logos/KMD_WHITE.png" alt />
      </hyperlink>
    </span>
    <span>
      <hyperlink url="https://ida.dk/">
        <img src="../assets/img/common/sponsor_logos/IDA_white.png" alt />
      </hyperlink>
    </span>
    <span>
      <hyperlink url="https://epiconextgen.dk/">
        <img src="../assets/img/common/sponsor_logos/epico.svg" alt />
      </hyperlink>
    </span>
    <span>
      <hyperlink url="https://da-dk.sennheiser.com/">
        <img src="../assets/img/common/sponsor_logos/sennheiser.svg" alt />
      </hyperlink>
    </span>
    <span>
      <hyperlink url="https://www.milestonesys.com/">
        <img src="../assets/img/common/sponsor_logos/milestone_png.png" alt />
      </hyperlink>
    </span>
  </div>
</template>

<script>
import Hyperlink from "../components/Hyperlink.vue";
export default {
  components: {
    Hyperlink
  }
};
</script>

<style scoped>
.sponsor-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

small {
  color: #0800ff;
  font-style: italic;
}

img {
  width: 118px;
}

@media only screen and (max-width: 1000px) {
  .sponsor-bar {
    flex-direction: column;
  }

  img {
    width: 200px;
  }

  span {
    margin: 20px;
  }
}
</style>