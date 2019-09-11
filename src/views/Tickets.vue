<template>
  <div class="tickets">
    <h1 class="title">Buy Ticket</h1>

    <div class="steps">
      <h3 class="hollow-text">1.</h3>
      <h3>Find seat</h3>
      <h3 class="hollow-text">2.</h3>
      <h3>Buy ticket</h3>
      <h3 class="hollow-text">3.</h3>
      <h3>Check-in</h3>
    </div>

    <div id="step-one">
      <h3 class="hollow-text">1.</h3>
      <h3>Find seat</h3>
      <p>Choose your table and seat number during the booking process. The table number from your booking is final. Ignore any other table numbers than the ones posted on ITU LAN posters on the tables.</p>
      <img
        height="300px"
        src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-anchor="#step-one"
      />
      <img
        height="300px"
        src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-anchor="#step-one"
      />
      <img
        height="300px"
        src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-anchor="#step-one"
      />
    </div>
    <div class="flex-wrapper">
      <div id="step-two">
        <h3 class="hollow-text">2.</h3>
        <h3>Buy Ticket</h3>
        <p>
          <a href="https://itulan.safeticket.dk/itulanspring19" target="_blank">But your ticket here</a>
        </p>
      </div>
      <div id="step-three">
        <h3 class="hollow-text">3.</h3>
        <h3>Check-in</h3>
        <p>When you arrive please check-in at 2A30. Here you will also receive your exclusive ITU LAN wristband.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tickets {
  margin: 0 auto;
  max-width: 800px;
  padding: 15px;
  text-align: center;
  margin-bottom: 80px;
}

.tickets h3 {
  display: inline;
  letter-spacing: 2px;
}

.tickets h3::after {
  content: " ";
}

.title {
  margin: 0 auto;
  padding-bottom: 25px;
  display: block;
}

.steps {
  margin-bottom: 4rem;
}

.flex-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.flex-wrapper > div {
  flex-basis: 100%;
}

#step-one {
  margin-bottom: 4rem;
}

img {
  margin: 10px 0px;
}
</style>