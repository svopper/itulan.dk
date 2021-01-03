<template>
  <div id="minecraft-container">
    <h3 class="title">
      Minecraft<img
        v-if="doneFetching"
        :src="serverData.icon"
        alt="Minecraft Server Icon"
      />
    </h3>
    <div v-if="fetching">
      <LoadingSpinner />
    </div>
    <div v-else class="server-info-container">
      <div class="server-info">
        <p class="label">{{ $t("servers.games.minecraft.ipLabel") }}</p>
        <p class="info">
          {{ serverData.hostname
          }}<img
            id="copy-to-clipboard-icon"
            src="@/assets/img/common/copy.png"
            alt="Copy to clipboard image"
            height="20px"
            @click="copyHostnameToClipboard"
          />
        </p>
      </div>
      <div class="server-info">
        <p class="label">
          {{ $t("servers.games.minecraft.onlinePlayersLabel") }}
        </p>
        <p class="info">
          {{ serverData.players.online }}/{{ serverData.players.max }}
          <a
            id="show-players-button"
            v-if="serverData.players.online"
            @click="showModal = true"
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
      doneFetching: false,
    };
  },
  methods: {
    fetchUserImage(userName) {
      let uuid = this.serverData.players.uuid[userName];
      console.log("User:", uuid);
      return `https://crafatar.com/avatars/${uuid}`;
    },
    async copyHostnameToClipboard() {
      try {
        await navigator.clipboard.writeText(this.serverData.hostname);
        this.$toast.open({
          message: "Copied to clipboard!",
          type: "success",
          position: "top",
        });
      } catch (err) {
        this.$toast.open({
          message: "Failed to copy to clipboard!",
          type: "error",
          position: "top",
        });
      }
    },
  },
  async beforeMount() {
    this.fetching = true;
    let result = await axios
      .get("https://api.mcsrvstat.us/2/minecraft.itulan.dk")
      .then((res) => res.data);

    if (!result.online) {
      this.serverData = {
        icon: "-",
        hostname: result.hostname,
        players: {
          online: "-",
          max: "-",
        },
        version: "-",
        online: result.online,
      };
    }
    this.doneFetching = true;
    this.serverData = result;
    this.fetching = false;
  },
};
</script>

<style scoped>
#minecraft-container {
  text-align: left;
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

#show-players-button {
  cursor: pointer;
  text-transform: capitalize;
  color: #808080;
  font-size: 0.8rem;
}

#show-players-button:hover {
  text-decoration: underline;
}

#copy-to-clipboard-icon {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin-left: 0.8rem;
  cursor: pointer;
}

#copy-to-clipboard-icon:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.1);
}

@media (min-width: 600px) {
  .server-info-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>