<template>
  <div class="tickets">
    <h1 class="title" data-aos="fade-up">{{ $t("tickets.title") }}</h1>
    <hyperlink id="ticket-link" newTab :url="$t('common.ticketUrl')">
      <text-circle
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1250"
        message="Buy ticket"
        radius="180px"
        font-size="2rem"
        >{{ $t("tickets.title") }}</text-circle
      >
    </hyperlink>

    <div class="steps">
      <span data-aos="fade-left" data-aos-delay="300">
        <h3 class="hollow-text">1.</h3>
        <h3>{{ $t("tickets.steps.findSeat.title") }}</h3>
      </span>
      <span data-aos="fade-left" data-aos-delay="600">
        <h3 class="hollow-text">2.</h3>
        <h3>{{ $t("tickets.steps.buyTicket.title") }}</h3>
      </span>
      <span data-aos="fade-left" data-aos-delay="900">
        <h3 class="hollow-text">3.</h3>
        <h3>{{ $t("tickets.steps.checkin.title") }}</h3>
      </span>
    </div>

    <div id="step-one" data-aos="fade-up" data-aos-delay="200">
      <span class="step-header">
        <h3 class="hollow-text">
          {{ $t("tickets.steps.findSeat.stepNumber") }}
        </h3>
        <h3>{{ $t("tickets.steps.findSeat.title") }}</h3>
      </span>
      <p>{{ $t("tickets.steps.findSeat.text") }}</p>
      <div class="floor-wrapper">
        <img
          width="100%"
          id="floor-4"
          src="../assets/img/tickets/floors/4_floor.png"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor="#step-one"
          data-aos-once="true"
          alt="ITU 4th floor"
          loading="lazy"
        />
        <img
          width="100%"
          id="floor-3"
          src="../assets/img/tickets/floors/3_floor.png"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-anchor="#step-one"
          data-aos-once="true"
          alt="ITU 3rd floor"
          loading="lazy"
        />
        <img
          width="100%"
          id="floor-2"
          src="../assets/img/tickets/floors/2_floor.png"
          data-aos="fade-up"
          data-aos-delay="1700"
          data-aos-anchor="#step-one"
          data-aos-once="true"
          alt="ITU 2nd floor"
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex-wrapper">
      <div id="step-two">
        <span class="step-header">
          <h3 class="hollow-text">
            {{ $t("tickets.steps.buyTicket.stepNumber") }}
          </h3>
          <h3>{{ $t("tickets.steps.buyTicket.title") }}</h3>
        </span>
        <p>
          <hyperlink id="inline-link" :url="$t('common.ticketUrl')">{{
            $t("tickets.steps.buyTicket.text")
          }}</hyperlink>
        </p>
      </div>
      <div id="step-three">
        <span class="step-header">
          <h3 class="hollow-text">
            {{ $t("tickets.steps.checkin.stepNumber") }}
          </h3>
          <h3>{{ $t("tickets.steps.checkin.title") }}</h3>
        </span>
        <p>{{ $t("tickets.steps.checkin.text") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TextCircle from "@/components/Circle";
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
    TextCircle,
    Hyperlink,
  },
};
</script>


<style scoped>
#ticket-link {
  position: absolute;
  top: 10%;
  right: 5%;
  transform: scale(0.8);
}

#ticket-link {
  color: inherit !important;
}

#ticket-link:hover {
  color: inherit !important;
  text-decoration: none !important;
}

.tickets h3 {
  display: inline;
  letter-spacing: 2px;
}

.tickets h3::after {
  content: " ";
}

.tickets p {
  margin-top: 1rem;
}

.title {
  margin: 0 auto;
  padding-bottom: 25px;
  display: block;
}

.step-header {
  margin-bottom: 1rem !important;
}

.steps {
  margin-bottom: 4rem;
  position: relative;
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

@media only screen and (max-width: 992px) {
  #ticket-link {
    top: initial;
    right: initial;
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 600px) {
  .tickets h3 {
    letter-spacing: 1px;
  }

  .steps {
    margin-bottom: 3rem;
  }

  .steps h3 {
    font-size: 1.3rem;
  }

  #ticket-link {
    margin-bottom: 0rem;
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