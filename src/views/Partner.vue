<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <h2 class="hollow-text">Become a sponsor</h2>
    <div class="flex-wrapper">
      <div>
        <img src="../assets/img/partner/cover.png" width="400px" alt />
      </div>
      <div class="text">
        <h3>About us</h3>
        <p>ITU LAN is a non-profit university organization. We host a biannual LAN party at the IT Unitversity with more than 300 students participating in each event.</p>
        <p>Sponsorships are a key part of making each LAN party a fun event, which is why we are looking for companies or organizations of interest to either sponsor tournament prizes or activities for all ITU LAN participants.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex-wrapper {
  display: flex;
}

.text {
  text-align: left;
}

.flex-wrapper > div {
  padding: 0px 10px;
}
</style>