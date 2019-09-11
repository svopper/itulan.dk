<template>
  <div class="home">
    <header class="v-header container">
      <div class="fullscreen-video-wrap">
        <video src="http://dev.itulan.dk/vid/bg.mp4" autoplay loop muted playsinline></video>
      </div>
      <div class="header-overlay"></div>
      <div class="header-content text-md-center">
        <h2 data-aos="fade-right" class="hollow-text">25-27</h2>
        <h1 data-aos="fade-right" data-aos-delay="100">October</h1>
        <h2 data-aos="fade-right" data-aos-delay="200" class="hollow-text">Fall 2019</h2>
        <div data-aos="fade-left" id="ticket-circle">
          <text-circle message="Buy ticket here!" radius="180px" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import TextCircle from "../components/Circle";
export default {
  components: {
    TextCircle
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.v-header {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  margin-top: -58px; /* navbar height = 58px */
  text-align: center;
}

.fullscreen-video-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-video-wrap video {
  min-height: 100%;
  min-width: 100%;
}

.header-overlay {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
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

@media (max-width: 991px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
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
    right: 13%;
  }

  .header-content {
    margin-top: -250px;
  }
}

@media only screen and (max-width: 400px) {
  .header-content h1 {
    font-size: 3.5rem;
  }

  .header-content h2 {
    font-size: 2.5rem;
  }

  .header-content {
    margin-top: -200px;
  }
}
</style>


