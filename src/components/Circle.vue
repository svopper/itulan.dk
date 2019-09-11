<template>
  <div class="circle-outline">
    <div :style="styleCircle" class="circle">
      <span :style="styleMessage" class="message">{{ message }}</span>
    </div>
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
    fontSize: {
      type: String,
      default: "2rem"
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    styleCircle() {
      return {
        width: this.radius,
        height: this.radius
      };
    },
    styleMessage() {
      return {
        fontSize: this.fontSize
      };
    }
  }
};
</script>

<style scoped>
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
  font-family: Anton, Arial, Helvetica, sans-serif;
  display: block;
  margin: 0 auto;
  width: 70%;
  letter-spacing: 2px;
  text-align: center;
  line-height: 120%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

@media only screen and (max-width: 600px) {
  .circle-outline {
    transform: scale(0.7);
  }
}
</style>