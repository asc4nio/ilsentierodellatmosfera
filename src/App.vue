<script setup>
import Map from "./views/Map.vue";
import Welcome from "./views/Welcome.vue";
import Tappa from "./views/Tappa.vue";

import { AppState } from "./stores/appStore";
import { DeviceState } from "./stores/deviceStore";
import { onMounted } from "vue";

onMounted(async () => {
  DeviceState.updateInfo();
  scaleMainContainer();
});

// Dimensioni di riferimento
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

function scaleMainContainer() {
  const mainContainer = document.getElementById("main");

  // Calcola il fattore di scala basato sulle dimensioni della finestra
  const scaleX = window.innerWidth / BASE_WIDTH;
  const scaleY = window.innerHeight / BASE_HEIGHT;
  const scale = Math.min(scaleX, scaleY);

  // Applica le dimensioni scalate in pixel al contenitore
  mainContainer.style.width = `${BASE_WIDTH * scale}px`;
  mainContainer.style.height = `${BASE_HEIGHT * scale}px`;

  // Centra il contenitore all'interno della viewport
  mainContainer.style.top = `${
    (window.innerHeight - BASE_HEIGHT * scale) / 2
  }px`;
  mainContainer.style.left = `${
    (window.innerWidth - BASE_WIDTH * scale) / 2
  }px`;

  // Ridimensiona il font in base alla scala
  document.body.style.fontSize = `${16 * 1.25 * scale}px`;
}

// // Chiama la funzione al caricamento e al ridimensionamento della finestra
// window.addEventListener('load', scaleMainContainer);
window.addEventListener("resize", scaleMainContainer);
</script>

<template>
  <main id="main">
    <Welcome v-if="AppState.currentView === 'welcome'"></Welcome>
    <Map v-else-if="AppState.currentView === 'map'"></Map>
    <Tappa v-else-if="AppState.currentView === 'tappa'"></Tappa>
  </main>
</template>

<style scoped>
main {
  @apply absolute;
  /* @apply relative h-full w-full; */
  @apply border border-black border-[.1em];
  @apply bg-white;
}
</style>
