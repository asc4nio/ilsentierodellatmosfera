<script setup>
import Map from "./views/Map.vue";
import Welcome from "./views/Welcome.vue";
import Tappa from "./views/Tappa.vue";

import { AppState } from "./stores/appStore";
import { DeviceState } from "./stores/deviceStore";
import { onMounted } from "vue";

import { updateSize } from "./components/utils";

function handleSize() {
  DeviceState.updateInfo();
  updateSize();
}

onMounted(async () => {
  handleSize();
  window.addEventListener("resize", handleSize);
});
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
  /* @apply bg-white; */
  @apply border border-black;
}
</style>
