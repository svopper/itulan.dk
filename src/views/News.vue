<template>
  <div class="news">
    <div class="flex-wrapper">
      <div>
        <h1 class="title">News</h1>
        <div id="pointer">
          <span>Follow us</span>
          <img src="../assets/img/pointer_down.gif" alt />
        </div>
        <div class="some-icon-container">
          <div>
            <a href="https://discord.gg/nSFXWQN" target="_blank" rel="noopener">
              <img src="../assets/img/socialmedia/discord_icon.svg" alt />
            </a>
          </div>
          <div
            class="some-desc"
          >Discord is our primary platofrm for contacting the crew during the LAN.</div>
          <div>
            <img src="../assets/img/socialmedia/facebook_icon.svg" alt />
          </div>
          <div
            class="some-desc"
          >Facebook is the main platform for announcements and event related information.</div>
          <div>
            <img src="../assets/img/socialmedia/insta_icon.svg" alt />
          </div>
          <div class="some-desc">We use Instagram to post images from the event.</div>
          <div>
            <img
              id="youtube-logo"
              height="25px"
              src="../assets/img/socialmedia/youtube_icon.png"
              alt
            />
          </div>
          <div
            class="some-desc"
          >YouTube is our new streaming platform, where videos related to LAN will reside.</div>
        </div>
      </div>
      <div id="mobile-wrapper">
        <div id="mobile">
          <post
            v-for="post in posts"
            :key="post.id"
            :date="post.created_time"
            :message="post.message"
            class="post"
          />
        </div>
      </div>
    </div>
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
      posts: [],
      isLoading: false
    };
  },
  async mounted() {
    this.isLoading = true;
    let posts = await axios
      .get(
        `https://graph.facebook.com/v4.0/${FACEBOOK_PAGE_ID}/posts?access_token=${FACEBOOK_ACCESS_TOKEN}`
      )
      .then(res => {
        return res.data.data;
      });
    this.posts = posts.filter(post => post.message !== undefined);
    this.isLoading = false;
  }
};
</script>

<style scoped>
.news {
  max-width: 800px;
}

.flex-wrapper {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  height: 80vh;
}

.flex-wrapper div {
  width: 100%;
}

#pointer span {
  display: block;
  font-style: italic;
}

#mobile {
  width: 100%;
  height: 100%;
  background-color: #07214c;
  border: 15px solid #000;
  border-radius: 40px;
  overflow: auto;
  padding: 20% 15px 10px 15px;
}

#mobile-wrapper {
  padding: 20px 40px;
}

.some-icon-container {
  font-size: 14px;
  text-align: left;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.some-icon-container img:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.4);
}

@media only screen and (max-width: 800px) {
  .flex-wrapper {
    display: flex;
    flex-grow: initial;
    flex-basis: initial;
    height: initial;
    flex-direction: column;
  }

  .flex-wrapper div {
    width: initial;
  }

  .some-desc {
    display: none;
  }

  .some-icon-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-template-columns: initial;
    grid-template-rows: initial;
    grid-column-gap: initial;
    grid-row-gap: initial;
    margin-bottom: 2rem;
  }

  .some-icon-container img:hover {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    transform: scale(1.4);
  }

  #pointer {
    margin: 20px 0px;
  }

  #youtube-logo {
    height: 30px;
  }

  #mobile {
    width: 100%;
    height: 100%;
    background-color: initial;
    border: initial;
    border-radius: initial;
    overflow: auto;
    padding: initial;
  }

  .post {
    border-top: 1px solid #fff;
    padding-top: 25px;
  }
}
</style>