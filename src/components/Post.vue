<template>
  <div>
    <div class="fb-post">
      <p class="date">{{ formattedDate }}</p>
      <p v-html="parsedPost" class="message"></p>
      <a
        href="stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url"
      >lik</a>
    </div>
  </div>
</template>

<script>
import formatDistance from "date-fns/formatDistance";

export default {
  props: ["date", "message"],
  computed: {
    parsedPost() {
      let post = this.message;
      let expression = /\bhttps?:\/\/\S+/gi;
      let regex = new RegExp(expression);

      var res = post.match(expression);

      if (res !== null) {
        res.forEach(m => {
          post = post.replace(regex, `<a target="_blank" href="${m}">LINK</a>`);
        });
      }

      return post;
    },
    formattedDate() {
      let parsedDate = Date.parse(this.date);
      return `${formatDistance(parsedDate, new Date())} ago`;
    }
  }
};
</script>

<style scoped>
.fb-post {
  margin: 1rem auto;
  padding: 0.4rem 3rem;
  border: 4px #2f3eac solid;
}

.message {
  font-size: 1rem;
  margin-top: 0px;
  overflow-wrap: break-word;
}

.date {
  font-weight: 900;
}
</style>