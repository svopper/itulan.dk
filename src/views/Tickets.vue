<template>
  <div class="tickets">
    <h1 class="title">Buy Ticket</h1>
    <a class="ticket-link" href="https://itulan.safeticket.dk/itulanspring19" target="_blank">
      <text-circle message="Buy ticket here!" radius="180px" font-size="2rem" />
    </a>

    <div class="steps">
      <span data-aos="fade-left" data-aos-delay="300">
        <h3 class="hollow-text">1.</h3>
        <h3>Find seat</h3>
      </span>
      <span data-aos="fade-left" data-aos-delay="600">
        <h3 class="hollow-text">2.</h3>
        <h3>Buy ticket</h3>
      </span>
      <span data-aos="fade-left" data-aos-delay="900">
        <h3 class="hollow-text">3.</h3>
        <h3>Check-in</h3>
      </span>
    </div>

    <div id="step-one">
      <h3 class="hollow-text">1.</h3>
      <h3>Find seat</h3>
      <p>Choose your table and seat number during the booking process. The table number from your booking is final. Ignore any other table numbers than the ones posted on ITU LAN posters on the tables.</p>
      <div class="floor-wrapper">
        <img
          width="100%"
          id="floor-4"
          src="../assets/img/floors/4th_floor.png"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor="#step-one"
        />
        <img
          width="100%"
          id="floor-3"
          src="../assets/img/floors/3rd_floor.png"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-anchor="#step-one"
        />
        <img
          width="100%"
          id="floor-2"
          src="../assets/img/floors/2nd_floor.png"
          data-aos="fade-up"
          data-aos-delay="1700"
          data-aos-anchor="#step-one"
        />
      </div>
    </div>
    <div class="flex-wrapper">
      <div id="step-two">
        <h3 class="hollow-text">2.</h3>
        <h3>Buy Ticket</h3>
        <p>
          <a
            id="inline-link"
            href="https://itulan.safeticket.dk/itulanspring19"
            target="_blank"
          >But your ticket here</a>
        </p>
      </div>
      <div id="step-three">
        <h3 class="hollow-text">3.</h3>
        <h3>Check-in</h3>
        <p>When you arrive, please check-in at 2A30. Here you will also receive your exclusive ITU LAN wristband.</p>
      </div>
    </div>
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
.ticket-link {
  margin-bottom: 40px;
  display: inline-block;
}

.ticket-link {
  color: inherit !important;
}

.ticket-link:hover {
  color: inherit !important;
  text-decoration: none !important;
}

.tickets {
  margin: 80px auto;
  max-width: 800px;
  padding: 15px;
  text-align: center;
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
  position: relative;
}

.steps > span {
  /* width: 1000px; */
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

.floor-wrapper {
  position: relative;
}

.floor-wrapper > img:not(:first-child) {
  margin-top: -20%;
}

@media only screen and (max-width: 600px) {
  .tickets h3 {
    letter-spacing: 1px;
  }

  .ticket-link {
    margin-bottom: 10px;
    display: inline-block;
  }

  .title {
    font-size: 4rem;
    padding-bottom: 0;
  }

  .steps {
    margin-bottom: 3rem;
  }

  .steps h3 {
    font-size: 1.3rem;
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .flex-wrapper > div {
    flex-basis: 100%;
  }

  #step-one,
  #step-two {
    margin-bottom: 2rem;
  }
}
</style>