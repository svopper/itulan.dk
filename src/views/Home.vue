<template>
  <header class="v-header container">
    <div class="fullscreen-video-wrap">
      <video
        src="https://dreamhackcdn.com/videos/d4bf6378-c268-464c-b169-c5174ed3baff/original.mp4"
        autoplay
        loop
        muted
      ></video>
    </div>
    <div class="header-overlay"></div>
    <div class="header-content text-md-center">
      <h1>25-27 October</h1>
      <h2>Fall 2019</h2>
    </div>
  </header>
</template>

https://dreamhackcdn.com/videos/d4bf6378-c268-464c-b169-c5174ed3baff/original.mp4
<style scoped>
@font-face {
  font-family: Anton;
  src: url("../assets/fonts/Anton/Anton-Regular.ttf");
}

* {
  box-sizing: border-box;
}

.v-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  z-index: -10;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
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
  letter-spacing: 7px;
}

.header-content h1,
.header-content h2 {
  text-transform: uppercase;
}

.header-content h1 {
  font-size: 7rem;
  margin-bottom: 0;
}

.header-content h2 {
  font-size: 5rem;
  margin-bottom: 0;
}

@media (max-width: 960px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}
</style>


