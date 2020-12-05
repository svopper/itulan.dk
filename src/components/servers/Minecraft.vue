<template>
  <div id="minecraft-container">
    <h3 class="title">
      Minecraft<img :src="serverData.icon" alt="Minecraft Server Icon" />
    </h3>
    <div v-if="fetching">
      <LoadingSpinner />
    </div>
    <div v-else class="server-info-container">
      <div class="server-info">
        <p class="label">{{ $t("servers.games.minecraft.ipLabel") }}</p>
        <p class="info">{{ serverData.hostname }}</p>
      </div>
      <div class="server-info">
        <p class="label">
          {{ $t("servers.games.minecraft.onlinePlayersLabel") }}
        </p>
        <p class="info">
          {{ serverData.players.online }}/{{ serverData.players.max }}
          <a v-if="serverData.players.online" @click="showModal = true"
            >Show players</a
          >
        </p>
      </div>
      <div class="server-info">
        <p class="label">{{ $t("servers.games.minecraft.versionLabel") }}</p>
        <p class="info">{{ serverData.version }}</p>
      </div>
      <div class="server-info">
        <p class="label">Status</p>
        <div v-if="serverData.online">
          <p class="info">Online<StatusIndicator color="#32CD32" /></p>
        </div>
        <div v-else>
          <p class="info">Offline<StatusIndicator color="#ff4935" /></p>
        </div>
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <div v-for="p in serverData.players.list" :key="p">
          <p>
            <img height="20px" :src="fetchUserImage(p)" alt="User Image" />
            {{ p }}
          </p>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StatusIndicator from "@/components/StatusIndicator";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "../Modal.vue";
export default {
  components: {
    StatusIndicator,
    LoadingSpinner,
    Modal,
  },
  data() {
    return {
      serverData: null,
      fetching: false,
      showModal: false,
    };
  },
  methods: {
    fetchUserImage(userName) {
      let uuid = this.serverData.players.uuid[userName];
      console.log("User:", uuid);
      return `https://crafatar.com/avatars/${uuid}`;
    },
  },
  async mounted() {
    this.fetching = true;
    await axios
      .get("https://api.mcsrvstat.us/2/minecraft.itulan.dk")
      .then((res) => {
        if (res.data.online) {
          this.serverData = res.data;
          console.log(res.data);
        } else {
          this.serverData = {
            icon: "-",
            hostname: res.data.hostname,
            players: {
              online: "-",
              max: "-",
            },
            version: "-",
            online: res.data.online,
          };
        }
      })
      .finally(() => {
        this.fetching = false;
      });
  },
};
</script>

<style scoped>
#minecraft-container {
  text-align: left;
}

.server-info {
  /* border: 1px solid red; */
}

.server-info-container {
  display: grid;
  grid-gap: 1rem;
}

.server-info .label {
  font-style: italic;
  margin-bottom: 0;
}

.server-info .info {
  font-size: 1.2rem;
  font-weight: 900;
}

@media (min-width: 600px) {
  .server-info-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>