<script setup>
import Map from "./views/Map.vue";
import Welcome from "./views/Welcome.vue";
import Tappa from "./views/Tappa.vue";

import { AppState } from "./stores/appStore";
import { DeviceState } from "./stores/deviceStore";
import { onMounted } from "vue";

onMounted(async () => {
  DeviceState.updateInfo();
});
</script>

<template>
  <main>
    <Welcome v-if="AppState.currentView === 'welcome'"></Welcome>
    <Map v-else-if="AppState.currentView === 'map'"></Map>
    <Tappa v-else-if="AppState.currentView === 'tappa'"></Tappa>
  </main>
</template>

<style scoped>
main {
  @apply relative w-full h-full overflow-clip;
}
</style>
