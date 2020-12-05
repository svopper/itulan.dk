<template>
  <svg
    width="20"
    height="20"
    viewbox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" fill="none" r="10" :stroke="color" stroke-width="2">
      <animate
        attributeName="r"
        from="3"
        to="7"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      ></animate>
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      ></animate>
    </circle>
    <circle cx="10" cy="10" :fill="color" r="5"></circle>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      validator: (value) => {
        if (!value.startsWith("#")) return false;
        if (value.length != 7) return false;
        return true;
      },
    },
  },
};
</script>

<style>
</style>