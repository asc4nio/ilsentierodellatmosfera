<script setup>
defineProps({
  data: Object,
});

import imgPlaceholder from "../../assets/image-placeholder.jpg";

// const emit = defineEmits(["openGame"]);

// function openGame() {
//   emit("openGame");
// }
</script>

<template>
  <div class="wrapper">
    <div id="tappa-contenuto">
      <div id="tappa-text">
        <h1 class="mb-12">
          {{ data.titolo }}
        </h1>
        <p class="mb-8 text-balance" v-for="item in data.contenuto">
          {{ item }}
        </p>
      </div>
      <div id="tappa-image">
        <!-- <img :src="imgPlaceholder" alt="" /> -->
      </div>
    </div>
    <slot></slot>
    <!-- <button @click="openGame">Game</button> -->
  </div>
</template>

<style scoped>
.wrapper {
  @apply relative w-full h-full;
  @apply flex flex-col justify-stretch items-stretch;
  max-height: calc(100% - 4rem);
}

#tappa-contenuto {
  @apply bg-white flex-grow;
  @apply grid grid-cols-2;
}

#tappa-text {
  @apply p-16;
}

#tappa-image {
  @apply bg-cover bg-center;
  background-image: url("../../assets/image-placeholder.jpg");
}

button {
  @apply flex-grow-0;
}
</style>
