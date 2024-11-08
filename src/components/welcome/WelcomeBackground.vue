<script setup>
import cloud1 from "../../assets/map-cloud-1.svg";
import cloud2 from "../../assets/map-cloud-2.svg";
import cloud3 from "../../assets/map-cloud-3.svg";

import marmotta from "../../assets/welcome-marmotta.png";
import front from "../../assets/welcome-layer-front.png";
import back from "../../assets/welcome-back.png";
import marmottaMask from "../../assets/welcome-marmotta-mask.png";
</script>

<template>
  <div class="wrapper sky-bg">
    <div class="clouds">
      <img class="cloud" :src="cloud1" />
      <img class="cloud" :src="cloud2" />
      <img class="cloud" :src="cloud3" />
    </div>
    <div class="layer back">
      <img class="image" :src="back" />
    </div>
    <div class="layer marmotta">
      <img class="image" :src="marmotta" />
    </div>
    <div class="layer marmotta-mask">
      <img class="image" :src="marmottaMask" />
    </div>
    <div class="layer front">
      <img class="image" :src="front" />
    </div>
    <!-- <div class="static"></div>
    <div class="flowers"></div> -->
  </div>
</template>

<style scoped>
.wrapper {
  @apply absolute top-0 left-0 w-full h-full  z-[-1];
}

.layer {
  @apply absolute top-0 left-0 w-full h-full;
}

.clouds {
  @apply absolute top-0 left-0 w-full h-full;
}
.cloud {
  @apply absolute w-[20vw];
}
/* .static {
  @apply absolute top-0 left-0 w-full h-full;
  background-image: url("../../assets/map-static.png");
  background-size: cover;
}
.flowers {
  @apply absolute top-0 left-0 w-full h-full;
} */
</style>
