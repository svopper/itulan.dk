<template>
  <div class="news">
    <h3>News</h3>
    <post v-for="post in posts" :key="post.id" :date="post.created_time" :message="post.message" />
  </div>
</template>

<script>
import axios from "axios";
import formatDistance from "date-fns/formatDistance";
import Post from "@/components/Post";
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_PAGE_ID } from "../../config/keys";
export default {
  name: "home",
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    formatDate(date) {
      let parsedDate = new Date(Date.parse(date));
      return formatDistance(parsedDate, new Date());
      // return `${parsedDate.getFullYear()}/${parsedDate.getMonth() +
      //   1}/${parsedDate.getDate()}`;
    }
  },
  async mounted() {
    let posts = await axios
      .get(
        `https://graph.facebook.com/v4.0/${FACEBOOK_PAGE_ID}/feed?access_token=${FACEBOOK_ACCESS_TOKEN}`
      )
      .then(res => {
        return res.data.data;
      });

    this.posts = posts.filter(post => post.message !== undefined);
  }
};
</script>

<style>
.news {
  margin: 0 auto;
  max-width: 600px;
  padding: 15px;
}
</style>