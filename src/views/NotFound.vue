<template>
  <div class="not-found">
    <h1>{{ $t("notFound.title") }}</h1>
    <p>{{ $t("notFound.text") }}</p>
    <img
      src="../assets/img/notfound/404-gif.gif"
      alt="Animated git of a panda destroying a computer"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.not-found img {
  width: 100%;
}
</style>