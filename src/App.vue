<script setup>
import { AppState } from "./stores/appStore";
// import { DeviceState } from "./stores/deviceStore";
import { updateAppSize } from "./components/utils";
import { onMounted } from "vue";

import Map from "./views/Map.vue";
import Welcome from "./views/Welcome.vue";
import Tappa from "./views/Tappa.vue";

import { onEnter, onLeave } from "./config/viewTransitions";

onMounted(async () => {
  updateAppSize();
  window.addEventListener("resize", updateAppSize);
});
</script>

<template>
  <main id="main">
    <Transition
      appear
      mode="out-in"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <Welcome v-if="AppState.currentView === 'welcome'"></Welcome>
      <Map v-else-if="AppState.currentView === 'map'"></Map>
      <Tappa v-else-if="AppState.currentView === 'tappa'"></Tappa>
    </Transition>
  </main>
</template>

<style scoped>
main {
  @apply absolute overflow-clip;
  /* @apply bg-white; */
  @apply border border-black;
}
</style>
