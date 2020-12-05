<template>
  <div class="servers">
    <h1 class="title" data-aos="fade-up">{{ $t("servers.title") }}</h1>
    <p data-aos="fade-up" data-aos-delay="200">
      {{ $t("servers.description") }}
    </p>
    <div class="servers-container">
        <div class="server">
            <Minecraft />
        </div>
    </div>
  </div>
</template>

<script>
import Minecraft from '@/components/servers/Minecraft'
export default {
    components: {
        Minecraft
    }
}
</script>

<style>
    .servers-container {
        margin-top: 5rem;
    }
</style>