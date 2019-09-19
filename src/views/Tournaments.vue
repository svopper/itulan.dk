<template>
  <div class="tournaments">
    <h1 class="title">Tournaments</h1>
    <p>ITU LAN is hosting several tounament during the weekend, and here you can sse an overview over the tournaments. Are you up for the challenge?!</p>
    <div v-if="!isPublic">
      <h3>Tournaments will be announced soon...</h3>
    </div>
    <div v-else class="tournaments-wrapper">
      <div v-for="t in tournaments" :key="t.url">
        <h3>{{ t.title }}</h3>
        <small class="platform">Platform: {{t.platform}}</small>
        <iframe width="100%" height="88" :src="t.url" allowfullscreen frameborder="0"></iframe>
        <p v-if="t.description">{{ t.description }}</p>
        <p v-else>Description TBA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isPublic() {
      return new Date() > new Date("2019-10-03T00:00:00");
    }
  },
  data() {
    return {
      tournaments: [
        {
          title: "Counter-Strike: Global Offence",
          url:
            "https://widget.toornament.com/tournaments/2811126039466532864/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "PC"
        },
        {
          title: "CS:GO Danger Zone",
          url:
            "https://widget.toornament.com/tournaments/2811222221909147648/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "PC"
        },
        {
          title: "Rocket League",
          url:
            "https://widget.toornament.com/tournaments/2811210599123623936/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "PC"
        },
        {
          title: "Warcraft 3 Warlock",
          url:
            "https://widget.toornament.com/tournaments/2854040897888059392/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "PC"
        },
        {
          title: "Mario Kart 8 Deluxe",
          url:
            "https://widget.toornament.com/tournaments/2811201601864605696/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "Nintendo Switch"
        },
        {
          title: "Stellaris",
          url:
            "https://widget.toornament.com/tournaments/2854042174398095360/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "PC"
        },
        {
          title: "Magic: The Gathering",
          url:
            "https://widget.toornament.com/tournaments/2811215862838206464/registration?_locale=en_US&theme=discipline",
          description:
            "Greetings Planeswalkers: It's time to dddddddddddddduel! At LAN this year, the very first ITU LAN Championship in Magic: The Gathering will be held. The tournament will be using MTGA (Magic: The Gathering Arena), the new online client, and the format will be a Standard BO3 tournament. Each player will bring 1 deck. We are lucky enough that a Standard rotation has just happened at the time of the tournament, so we get to play with cards from the newest set: Throne of Eldraine! If we are lucky, the tournament will be streamed, and of course there are going to be amazing prizes for the winner!",
          platform: "PC"
        },
        {
          title: "Super Smash Bros Ultimate",
          url:
            "https://widget.toornament.com/tournaments/2811215611487911936/registration?_locale=en_US&theme=discipline",
          description: "",
          platform: "Nintendo Switch"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tournament-wrapper {
  background-color: #444546;
  height: 72px;
  width: 100%;
  margin-bottom: 15px;
}

.tournaments-wrapper {
  margin-bottom: 7rem;
}

.platform {
  display: block;
  margin-bottom: 10px;
}

@media only screen and (max-width: 750px) {
  .tournaments-wrapper {
    margin-bottom: 3rem;
  }
}
</style>