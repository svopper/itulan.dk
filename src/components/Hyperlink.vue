<template>
  <a :href="url" target="_blank" rel="noopener">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>