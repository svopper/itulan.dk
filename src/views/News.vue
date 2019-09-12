<template>
  <div class="news">
    <h1 class="title">News</h1>
    <div class="spinner-wrapper" v-if="isLoading">
      <loading-spinner class="spinner"></loading-spinner>
    </div>
    <div>
      <post v-for="post in posts" :key="post.id" :date="post.created_time" :message="post.message" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_PAGE_ID } from "../../config/keys";
import LoadingSpinner from "../components/LoadingSpinner";
export default {
  name: "home",
  components: {
    Post,
    LoadingSpinner
  },
  data() {
    return {
      posts: [],
      isLoading: false
    };
  },
  async mounted() {
    this.isLoading = true;
    let posts = await axios
      .get(
        `https://graph.facebook.com/v4.0/${FACEBOOK_PAGE_ID}/feed?access_token=${FACEBOOK_ACCESS_TOKEN}`
      )
      .then(res => {
        return res.data.data;
      });

    this.posts = posts.filter(post => post.message !== undefined);
    this.isLoading = false;
  }
};
</script>

<style>
.news {
  margin: 80px auto;
  max-width: 600px;
  padding: 15px;
}

.title {
  text-align: center;
}

.spinner-wrapper {
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>