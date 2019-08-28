<template>
  <div>
    <h1>Stream</h1>
    <!-- <video src="https://player.twitch.tv/?volume=0.5&!muted&channel=beyondthesummit"></video> -->
    <div class="stream-content">
      <div class="overla"></div>
      <iframe
        class="stream"
        src="https://player.twitch.tv/?volume=0.5&!muted&channel=beyondthesummit"
        allowfullscreen
        scrolling="no"
        frameborder="0"
        allow="autoplay; fullscreen"
        width="100%"
        height="60%"
      ></iframe>
    </div>
  </div>
</template>

<style>
.overlay {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  width: 100%;
  height: 100%;
}
.stream {
  position: relative;
}
</style>