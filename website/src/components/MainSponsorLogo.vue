<template>
  <div>
    <span>
      <em>powered by</em>
    </span>
    <br />
    <hyperlink newTab url="https://orsted.com/en/Careers">
      <img
        alt="Ørsted logo"
        id="logo"
        src="../assets/img/common/sponsor_logos/Orsted_RGB_White.png"
      />
    </hyperlink>
  </div>
</template>

<script>
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
    Hyperlink
  }
};
</script>

<style>
#logo {
  width: 400px;
  z-index: 10;
}

@media only screen and (max-width: 600px) {
  #logo {
    width: 100%;
  }
}
</style>