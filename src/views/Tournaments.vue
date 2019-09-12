<template>
  <div class="tournaments">
    <h1 class="title">Tournaments</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi officiis dolor obcaecati dignissimos sapiente rerum maiores veritatis iste ipsa minima soluta error officia hic excepturi id reprehenderit suscipit, magnam laboriosam, atque et? Possimus, ipsum dolorem exercitationem explicabo amet earum unde suscipit! Doloribus, quasi tempora? Dolores fugit vitae qui ducimus. Are you up for the challenge?!</p>
    <div class="tournaments-wrapper">
      <h2 class="hollow-text">Majors</h2>
      <div v-for="major in majors" :key="major.url">
        <h3>{{ major.title }}</h3>
        <iframe width="100%" height="88" :src="major.url" allowfullscreen frameborder="0"></iframe>
        <p>{{ major.description }}</p>
      </div>
    </div>
    <div class="tournaments-wrapper">
      <h2 class="hollow-text">Minors</h2>
      <div v-for="minor in minors" :key="minor.url">
        <h3>{{ minor.title }}</h3>
        <iframe width="100%" height="88" :src="minor.url" allowfullscreen frameborder="0"></iframe>
        <p>{{ minor.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      majors: [
        {
          title: "Counter-Strike: Global Offence",
          url:
            "https://widget.toornament.com/tournaments/2811126039466532864/registration?_locale=en_US&theme=discipline",
          description:
            "The CS:GO tournament is the best way for you and your team to compete against other dedicated teams. You will have the time of your life beating those n00bs on the other teams. But don’t have too much fun, because you have to win to get our amazing prices! So gather four of your friends and sign up for the ultimate intense heartbreaking mindblowing competition, the ITU LAN CS:GO tournament! #GottaShootEmAll."
        },
        {
          title: "CS:GO Danger Zone",
          url:
            "https://widget.toornament.com/tournaments/2811222221909147648/registration?_locale=en_US&theme=discipline",
          description:
            "For the first time ever ITULAN will host a Battle Royale tournament! The platform will be Danger Zone in CS:GO, which is free to play now, so everyone can participate!"
        },
        {
          title: "Rocket League",
          url:
            "https://widget.toornament.com/tournaments/2811210599123623936/registration?_locale=en_US&theme=discipline",
          description:
            "Once again we are proud to announce the Rocket League Tournament for ITU LAN Spring'19. This time it has been promoted to a 'Major' Tournament. So prepare to compete for even greater prizes!"
        },
        {
          title: "Warcraft 3 Warlock",
          url:
            "https://widget.toornament.com/tournaments/2854040897888059392/registration?_locale=en_US&theme=discipline",
          description: "Descriptive text"
        }
      ],
      minors: [
        {
          title: "Mario Kart 8 Deluxe",
          url:
            "https://widget.toornament.com/tournaments/2811201601864605696/registration?_locale=en_US&theme=discipline",
          description: "Descriptive text"
        },
        {
          title: "Stellaris",
          url:
            "https://widget.toornament.com/tournaments/2854042174398095360/registration?_locale=en_US&theme=discipline",
          description: "Descriptive text"
        },
        {
          title: "Magic: The Gathering",
          url:
            "https://widget.toornament.com/tournaments/2811215862838206464/registration?_locale=en_US&theme=discipline",
          description:
            "At LAN this year, the very first ITU LAN Championship in Magic: The Gathering will be held. The tournament will be using MTGA (Magic: The Gathering Arena), the new online client, and the format will be a Standard BO3 tournament. Each player will bring 1 deck. We are lucky enough that a Standard rotation has just happened at the time of the tournament, so we get to play with cards from the newest set: Throne of Eldraine!"
        },
        {
          title: "Smash Bros",
          url:
            "https://widget.toornament.com/tournaments/2811215611487911936/registration?_locale=en_US&theme=discipline",
          description:
            "Super Smash Bros are returning for this years LAN, and again we're hosting a tournament!"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tournaments {
  margin: 0 auto;
  max-width: 800px;
  padding: 15px;
  text-align: center;
  margin-bottom: 80px;
}

.tournaments-wrapper {
  margin-bottom: 7rem;
}

@media only screen and (max-width: 750px) {
  .title {
    font-size: 3rem;
    padding-bottom: 0;
  }

  .tournaments-wrapper {
    margin-bottom: 3rem;
  }
}
</style>