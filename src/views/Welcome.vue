<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { ref } from "vue";
import Credits from "../components/Credits.vue";

import Button from "../components/ui/Button.vue";

import { openFullscreen, closeFullscreen } from "../components/utils";

const isCredits = ref(false);

function toggleCredits() {
  isCredits.value = !isCredits.value;
}

function start() {
  // openFullscreen();
  Nav.goToMap();
}
</script>

<template>
  <div id="background"></div>
  <div class="view">
    <!-- ACTION BOX -->
    <div class="action">
      <div class="logo">
        <h1 class="mb-[.5em]">Il sentiero dell’atmosfera</h1>
        <p class="mb-[1em]">Un percorso di speranza per il futuro</p>
      </div>
      <Button :onClick="start">Inizia</Button>
      <!-- <button @click="start">Inizia</button> -->
      <!-- <button @click="Nav.goToMap">Inizia</button> -->
    </div>
    <!-- SPONSOR BOX -->
    <div class="sponsor">
      <div class="sponsor-list flex">
        <p class="mr-[.75em]">Indici Opponibili</p>
        <p>Tecnoscienza</p>
      </div>

      <div class="credits-toggle" @click="toggleCredits" role="button">
        CREDITS
      </div>
    </div>
    <Credits @close="toggleCredits" v-if="isCredits" />
  </div>
</template>

<style scoped>
.view {
  @apply flex flex-col justify-items-stretch items-stretch;
  @apply p-[2em] w-full h-full;
}

#background {
  @apply absolute top-0 left-0 w-full h-full z-[0];
  @apply bg-cover bg-center;
  background-image: url("../assets/welcome-bg-placeholder.jpg");

  opacity: 0.3;
}

.action {
  @apply flex-grow flex flex-col justify-center items-center;
}
.logo {
  @apply flex flex-col justify-center items-center;
  @apply bg-blue-light p-[4em] m-[1em];
  border-radius: 50%;
}
.sponsor {
  @apply flex-grow-0 p-[1em] bg-white;
  @apply flex justify-between items-center;
}

.credits-toggle {
  @apply underline;
}
</style>
