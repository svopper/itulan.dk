<template>
  <div data-aos="fade-up" class="join">
    <h1 class="title" data-aos="fade-up">{{ $t("joinUs.title") }}</h1>

    <div v-if="!hasSuccessfullySubmitted">
      <h2 class="hollow-text" data-aos="fade-up">
        {{ $t("joinUs.subtitle") }}
      </h2>
      <p>
        It is not necessary to like games to join the ITU LAN crew! Whether
        you're interested in hosting tournaments, designing graphics stuff for
        the LANs, gathering sponsorships, or helping out with the events in
        another way, we'd love to welcome you to our crew! Just fill out the
        form below with your name, e-mail address where we can contact you, and
        your motivation for joining the crew.
      </p>
      <form id="contact-form" onsubmit="event.preventDefault();">
        <div class="input-group">
          <label for="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Your name..."
            v-model="form.name"
          />
        </div>

        <div class="input-group">
          <label for="email">E-mail address</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail address..."
            v-model="form.emailAddress"
          />
        </div>

        <div class="input-group">
          <label for="subject">Your motivation for joining the crew</label>
          <textarea
            required
            id="subject"
            name="subject"
            placeholder="Please write a couple of sentences on why you wan't to join the crew."
            style="height:200px"
            v-model="form.motivation"
          ></textarea>
        </div>
        <button @click="submitForm">Submit</button>
      </form>
    </div>
    <div v-else>
      <h2 class="hollow-text" data-aos="fade-up">
        Thank you!
      </h2>
      <p id="thank-you-message">
        We will take a look at your application and contact you as soon as
        possible.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        emailAddress: "",
        motivation: "",
      },
      hasSuccessfullySubmitted: false,
    };
  },
  methods: {
    submitForm() {
      axios
        .get(
          "https://europe-west1-itulan-dk-mailservice.cloudfunctions.net/sendMail",
          {
            params: {
              name: this.form.name,
              email: this.form.emailAddress,
              motivation: this.form.motivation,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.hasSuccessfullySubmitted = true;
        });
    },
  },
};
</script>

<style scoped>
#contact-form {
  text-align: initial;
}

#contact-form label {
  margin-left: 10px;
}

#contact-form button {
  float: right;
}

#thank-you-message {
  margin: 2rem 0rem;
}

.input-group {
  margin-bottom: 1.3rem;
}

input[type="text"],
input[type="email"],
textarea {
  color: #000;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>
