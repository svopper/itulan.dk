<template>
  <div class="home">
    <header class="v-header container">
      <div class="fullscreen-background-wrap">
        <img src="../assets/img/home/home_background.jpg" alt />
      </div>
      <div class="header-overlay"></div>
      <div class="header-content text-md-center">
        <h1 data-aos-once="true" data-aos="fade-right" data-aos-delay="100">ITU LAN</h1>
        <h2
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-delay="200"
          class="hollow-text"
        >{{ $t("home.date.season") }}</h2>
        <h2
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-delay="200"
        >{{ $t("home.date.dayMonth") }}</h2>
      </div>
      <div class="button-container">
        <a
          class="button"
          href="mailto:simon@itulan.dk?Subject=ITU%20LAN%20Application"
          target="_blank"
        >Join the crew?</a>
        <a class="button" href="/partner">Partner with us?</a>
      </div>

      <!-- <div id="circle-container">
        <lan-circle class="circsle" radius="150px" font-size="1.5rem"
          ><a
            href="mailto:simon@itulan.dk?Subject=ITU%20LAN%20Application"
            target="_blank"
            >Join the crew?</a
          ></lan-circle
        >
        <lan-circle class="circsle" radius="150px" font-size="1.5rem"
          ><a href="/partner">Partner with us?</a></lan-circle
        >
      </div>-->
    </header>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

a {
  color: inherit;
}

.button-container {
  margin-top: 40px;
}

.button-container > button,
.button-container > a {
  display: block;
  margin: 10px auto;
  width: 100%;
}

#circle-container {
  display: flex;
  flex-direction: row;
  z-index: 9;
}

.circsle {
  margin: 10px;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

#logo {
  width: 300px;
}

.powered-by {
  display: block;
  font-style: italic;
  margin-bottom: 10px;
}

.v-header {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.fullscreen-background-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-background-wrap img {
  min-height: 100%;
  min-width: 100%;
}

.header-overlay {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #031d4466;
}

.header-content {
  z-index: 2;
  margin: 0 auto;
}

.header-content h1,
.header-content h2 {
  margin-bottom: 0;
}

.header-content h1 {
  margin-top: 0;
}

#ticket-circle {
  position: absolute;
  right: 10%;
}

@media only screen and (max-width: 991px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

@media screen and (max-height: 800px) {
  #ticket-circle {
    top: 40%;
  }
}

@media only screen and (max-width: 600px) {
  .header-content h1 {
    font-size: 4.5rem;
  }

  .header-content h2 {
    font-size: 3rem;
  }

  #ticket-circle {
    right: 100%;
  }

  .header-content {
    margin-top: -250px;
  }

  #logo {
    width: 100%;
  }
}

@media only screen and (max-width: 1200px) {
  #ticket-circle {
    right: 10%;
  }
}

@media only screen and (max-width: 1000px) {
  #ticket-circle {
    transform: scale(0.7);
    margin-top: 3rem;
  }
}

@media only screen and (max-width: 400px), screen and (max-height: 400px) {
  .header-content h1 {
    font-size: 3.5rem;
  }

  .header-content h2 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 400px) {
  .header-content {
    margin-top: -200px;
  }
}
</style>
