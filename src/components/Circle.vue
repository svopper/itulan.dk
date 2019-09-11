<template>
  <div class="circle-outline">
    <a
      href="https://itulan.safeticket.dk/itulanspring19"
      target="_blank"
      :style="style"
      class="circle"
    >
      <span class="message">{{ message }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    radius: {
      type: String,
      required: true,
      default: "200px"
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    style() {
      return {
        width: this.radius,
        height: this.radius
      };
    }
  }
};
</script>

<style scoped>
a {
  color: inherit;
}
a:hover {
  color: inherit;
  text-decoration: none;
}

.circle {
  margin: 1.5rem;
  background-color: #0800ff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.circle:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.27);
}

.circle-outline {
  border: 2px solid #fff;
  border-radius: 50%;
  display: inline-block;
}

.message {
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
  font-size: 2rem;
  width: 70%;
  letter-spacing: 2px;
  text-align: center;
  line-height: 40px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

@media only screen and (max-width: 600px) {
  .circle-outline {
    transform: scale(0.7);
  }
}
</style>