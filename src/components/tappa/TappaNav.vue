<script setup>
const props = defineProps({
  isGame: Boolean,
});

const emit = defineEmits(["closeGame"]);

import { AppState } from "../../stores/appStore";
import { TAPPE } from "../../config/tappe.js";

function close() {
  if (props.isGame) {
    toContent();
  } else {
    toMap();
  }
}

function toMap() {
  AppState.currentView = "map";
  AppState.currentTappa = null;
}

function toContent() {
  emit("closeGame");
}
</script>

<template>
  <nav>
    <button class="secondary" id="back-map" v-if="!isGame" @click="toMap">
      Ritorna alla Mappa
    </button>
    <div id="tappa-title">Tappa {{ AppState.currentTappa }}/11</div>
    <button class="secondary" id="close-quiz" v-if="isGame" @click="toContent">
      Chiudi il gioco
    </button>
  </nav>
</template>

<style scoped>
nav {
  @apply relative w-full;
  @apply inline-grid grid-cols-3 items-center;
  max-height: 4rem;

  /* border: 1px solid black; */
}
#back-map {
  @apply col-start-1;
}
#tappa-title {
  @apply col-start-2 text-center;
}
#close-quiz {
  @apply col-start-3;
}
</style>
