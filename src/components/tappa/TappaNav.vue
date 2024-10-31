<script setup>
const emit = defineEmits(["closeGame"]);

import { AppState, TappaState, Nav } from "../../stores/appStore";
import { TAPPE } from "../../config/tappe.js";

function toContent() {
  emit("closeGame");
}
</script>

<template>
  <nav>
    <button
      class="secondary"
      id="back-map"
      v-if="!TappaState.isGame"
      @click="Nav.goToMap"
    >
      Ritorna alla Mappa
    </button>
    <div id="tappa-title">Tappa {{ TappaState.currentIndex }}/11</div>
    <!-- <div id="tappa-title">Tappa {{ AppState.currentTappa }}/11</div> -->
    <button
      class="secondary"
      id="close-quiz"
      v-if="TappaState.isGame"
      @click="Nav.closeGame"
    >
      Chiudi il gioco
    </button>
  </nav>
</template>

<style scoped>
nav {
  @apply relative w-full p-[2em];
  @apply inline-grid grid-cols-3 items-center;
}
#back-map {
  @apply col-start-1;
  justify-self: start;
}
#tappa-title {
  @apply col-start-2 text-center;
  justify-self: center;
}
#close-quiz {
  @apply col-start-3;
  justify-self: end;
}
</style>
