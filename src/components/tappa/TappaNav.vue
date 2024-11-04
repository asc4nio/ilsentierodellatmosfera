<script setup>
const emit = defineEmits(["closeGame"]);

import { AppState, TappaState, Nav } from "../../stores/appStore";
import { TAPPE } from "../../config/tappe.js";

import Button from "../ui/Button.vue";

function toContent() {
  emit("closeGame");
}
</script>

<template>
  <nav>
    <div id="back-map" v-if="!TappaState.isGame">
      <Button
        @click="
          () => {
            Nav.goToMap();
          }
        "
      >
        Ritorna alla Mappa
      </Button>
    </div>

    <div id="tappa-title" v-if="!TappaState.isGame">
      Tappa {{ TappaState.currentIndex }}/11
    </div>

    <div id="close-quiz" v-if="TappaState.isGame">
      <Button
        @click="
          () => {
            Nav.closeGame();
          }
        "
      >
        Chiudi il gioco
      </Button>
    </div>
    <!-- <button
      class="secondary"
      id="close-quiz"
      @click="Nav.closeGame"
    >
      Chiudi il gioco
    </button> -->
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
