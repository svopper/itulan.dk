<template>
  <footer class="footer">
    <hr />
    <div class="flex-container">
      <div>
        <br />
        <img
          class="footer-image"
          loading="lazy"
          height="200px"
          src="../assets/img/common/logo_white.png"
          alt="ITU LAN logo"
        />
      </div>
      <div>
        <h5>{{ $t("footer.address.title") }}</h5>
        <address>
          {{ $t("footer.address.name") }}
          <br />
          <em>
            <small>{{ $t("footer.address.partOf") }}</small>
          </em>
          <br />
          {{ $t("footer.address.studentCouncil") }}
          <br />
          {{ $t("footer.address.location") }}
          <br />
          {{ $t("footer.address.zipCode") }}
          <br />
          <br />
          {{ $t("footer.cvr") }}
          <br />
          <strong>
            <a :href="`mailto:${$t('footer.email')}`" class="text-white">{{
              $t("footer.email")
            }}</a>
          </strong>
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-basis: 50%;
  flex-grow: 0;
  margin-bottom: 5vh;
}

hr {
  border-top: 1px solid #fff;
  margin-top: 0;
  margin-bottom: 1rem;
}

.flex-container > div {
  width: 100%;
}

.footer-image {
  margin: 0 auto;
  text-align: center;
  display: block;
}

@media only screen and (max-width: 600px) {
  .flex-container {
    flex-direction: column-reverse;
    margin: 0 15px 5vh 15px;
  }
}
</style>