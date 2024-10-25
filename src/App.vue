<script setup>
/**
 * https://www.vue3-dnd.com/
 */

// import { ref } from 'vue'
import Map from "./views/Map.vue";
import Welcome from "./views/Welcome.vue";
import Tappa from "./views/Tappa.vue";

import { AppState } from "./stores/appStore";
</script>

<template>
  <main>
    <div
      id="background"
      :class="AppState.currentView === 'welcome' ? '' : 'zoom'"
      v-if="AppState.currentView !== 'tappa'"
    ></div>
    <div id="views">
      <Welcome v-if="AppState.currentView === 'welcome'"></Welcome>
      <Map v-else-if="AppState.currentView === 'map'"></Map>
      <Tappa v-else-if="AppState.currentView === 'tappa'"></Tappa>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply relative w-full h-full overflow-clip;
  border: 2px solid #2c3e50;

  /* font-size: 2rem; */
}

#background {
  @apply absolute top-0 left-0 w-full h-full;
  @apply bg-cover bg-center;
  background-image: url("./assets/image-placeholder.jpg");

  transition: transform 2s ease-in-out;
}

#background.zoom {
  transform: scale(1.5);
}

#views {
  @apply absolute top-0 left-0 w-full h-full;
  /* @apply flex items-center justify-center; */
}

/* button {
  @apply px-4 py-2 rounded-md bg-[#2c3e50] text-white;
} */
</style>
