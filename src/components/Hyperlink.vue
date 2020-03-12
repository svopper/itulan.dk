<template>
  <a :href="url" :target="target" rel="noopener">
    <slot></slot>
  </a>
</template> 

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    newTab: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    target() {
      if (this.newTab) {
        return "_blank";
      } else {
        return "_self";
      }
    }
  }
};
</script>