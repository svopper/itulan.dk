<template>
  <div class="home">
    <h1>Home</h1>
    <img class="center-image logo" alt="ITULAN logo" src="../assets/logo_svg.svg" />
    <post
      v-for="post in posts"
      :key="post.id"
      :date="formatDate(post.created_time)"
      :message="post.message"
    />
  </div>
</template>

<script>
import axios from "axios";
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
      return `${parsedDate.getFullYear()}/${parsedDate.getMonth() +
        1}/${parsedDate.getDate()} - ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;
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
.logo {
  height: 600px;
}
</style>


