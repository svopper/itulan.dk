<template>
  <div class="home">
    <header class="v-header container">
      <div class="fullscreen-video-wrap">
        <video src="http://dev.itulan.dk/vid/bg.mp4" autoplay loop muted playsinline></video>
      </div>
      <div class="header-overlay"></div>
      <div class="header-content text-md-center">
        <h1>25-27 October</h1>
        <h2>Fall 2019</h2>
        <div id="ticket-circle">
          <text-circle message="Buy tickets here!" radius="230px" />
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
  /* z-index: 0; */
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  margin-top: -62px;
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
  font-family: Anton, Arial, Helvetica, sans-serif;
}

.header-content h1,
.header-content h2 {
  text-transform: uppercase;
  letter-spacing: 7px;
}

.header-content h1 {
  font-size: 7rem;
  margin-bottom: 0;
}

.header-content h2 {
  font-size: 5rem;
  margin-bottom: 0;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
}

#ticket-circle {
  position: fixed;
  z-index: 1000;
  right: 10%;
}

@media (max-width: 960px) {
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


