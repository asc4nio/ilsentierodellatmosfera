<script setup>
import cloud1 from "../../assets/map-cloud-1.svg";
import cloud2 from "../../assets/map-cloud-2.svg";
import cloud3 from "../../assets/map-cloud-3.svg";
</script>

<template>
  <div class="wrapper sky-bg">
    <div class="clouds">
      <img class="cloud" :src="cloud1" />
      <img class="cloud" :src="cloud2" />
      <img class="cloud" :src="cloud3" />
    </div>
    <div class="static"></div>
    <div class="flowers"></div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply absolute top-0 left-0 w-full h-full z-[-1];
  /* @apply bg-blue;
  background: linear-gradient(0deg, #afe6fe 0%, #59aff4 100%); */
}
.clouds {
  @apply absolute top-0 left-0 w-full h-full;
}
.cloud {
  @apply absolute w-[20vw];
}
.static {
  @apply absolute top-0 left-0 w-full h-full;
  background-image: url("../../assets/map-static.png");
  background-size: cover;
}
.flowers {
  @apply absolute top-0 left-0 w-full h-full;
}
</style>
