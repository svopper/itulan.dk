<template>
  <div class="accordion">
    <div @click.prevent="active = !active" class="tab-header">
      <h3>{{ tournament.title }}</h3>
      <small>{{ tournament.platform }}</small>
    </div>
    <div class="details" v-show="active">
      <hr />
      <div>
        <iframe width="100%" height="400px" :src="tournament.widgetUrl" frameborder="0"></iframe>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  props: ["tournament"]
};
</script>

<style scoped>
.tab-header {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-header:hover {
  transition: all 0.2s;
  transform: scale(1.1);
  color: #ccc;
}

.details {
  margin-bottom: 10px;
}

h3 {
  margin-top: 10px;
  margin-bottom: 0px;
  letter-spacing: 2px;
  font-size: 3rem;
}
hr {
  background-color: #fff;
}

@media only screen and (max-width: 650px) {
  h3 {
    font-size: 2rem;
  }
}
</style>