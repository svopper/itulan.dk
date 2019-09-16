<template>
  <div>
    <div class="fb-post">
      <p class="date">{{ formattedDate }}</p>
      <p v-html="parsedPost" class="message"></p>
    </div>
  </div>
</template>

<script>
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";

export default {
  props: ["date", "message"],
  computed: {
    parsedPost() {
      let post = this.message;
      let expression = /\bhttps?:\/\/\S+/gi;
      let regex = new RegExp(expression);
      var res = post.match(expression);
      if (res !== null) {
        res.forEach(() => {
          post = post.replace(regex, "");
        });
        res.forEach(m => {
          post = `${post}<br><a target="_blank" href="${m}">Link</a>`;
        });
      }
      return post;
    },
    formattedDate() {
      let isoDate = parseISO(this.date);
      return `${formatDistance(isoDate, new Date())} ago`;
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