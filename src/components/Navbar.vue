<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <router-link class="router-link" to="/">
        <span class="router-link-text">ITU LAN</span>
      </router-link>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <router-link class="router-link" to="/news">
          <span class="router-link-text">News</span>
        </router-link>
        <router-link class="router-link" to="/tournaments">
          <span class="router-link-text">Tournaments</span>
        </router-link>
        <router-link class="router-link" to="/information">
          <span class="router-link-text">Information</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
  	toggle() {
    	this.open = !this.open
    }
  }
}
</script>

<style scoped>

</style>