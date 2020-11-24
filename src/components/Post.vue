<template>
  <div>
    <div class="fb-post">
      <p class="date">{{ formattedDate }}</p>
      <br />
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
          post = `${post}<br><a target="_blank" rel="noopener" href="${m}">Link</a>`;
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
.message {
  font-size: 14px;
  margin-top: 0px;
  overflow-wrap: break-word;
  text-align: left;
  margin-top: 15px;
  letter-spacing: initial;
}

.date {
  font-weight: 900;
  float: right;
  margin-bottom: 0px;
}
</style>