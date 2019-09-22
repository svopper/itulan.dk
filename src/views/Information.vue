<template>
  <div class="information">
    <h1 class="title" data-aos="fade-up">Information</h1>
    <div id="top"></div>

    <div
      v-for="(t, index) in topics"
      :key="t.index"
      data-aos="fade-up"
      :data-aos-delay="index * 100"
      data-aos-anchor="#top"
    >
      <h3>{{ t.topic }}</h3>
      <p v-for="(p, index) in t.paragraphs" :key="index" v-html="p"></p>
    </div>
    <h3>FOOD & BEVERAGES</h3>
    <p>You provide your own food at ITU LAN. Use the nearby supermarkets or order your food online.</p>
    <h3>PIZZA</h3>
    <p>There are several pizzerias nearby. Order your food to:</p>
    <div class="address">
      <p>IT University of Copenhagen</p>
      <p>Rued Langgaards Vej 7</p>
      <p>2300 Copenhagen S</p>
    </div>
    <h3>Kitchens</h3>
    <p>You can bring your own food and heat it up in the kitchen on each floor. There is refrigerators and microwave ovens.</p>
    <p class="bold">Please remember to use our trash cans!</p>
    <h3>SCROLLBAR – THE STUDENT BAR</h3>
    <p>The student bar is open Friday 15.00-02.00 and is well-stocked in beers, soda, drinks, RedBull, etc. at student friendly prices.</p>
    <p>You have to be 18 to buy alcoholic beverages.</p>
    <h3>SLEEP</h3>
    <p>There is no sleeping accommodations at ITU LAN. This is because of a strict fire code set for the building. We recommend going home and sleep there. We provide free storage for your gear in the meantime.</p>
    <h3>STORAGE</h3>
    <p>
      Storage will be in 2A12. If you need to store or pickup your gear please contact the crew at 4A10, or write @keywarden on
      <a
        href="https://discord.gg/nSFXWQN"
        target="_blank"
        rel="noopener"
      >our Discord channel.</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: this.$t("information.subjects")
    };
  }
};
</script>

<style scoped>
.information {
  text-align: left;
}

.address > p {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
}
</style>