<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

import TappaNav from "../components/tappa/TappaNav.vue";
import TappaGame from "../components/tappa/TappaGame.vue";
import TappaContent from "../components/tappa/TappaContent.vue";
import TappaGameCompleted from "../components/tappa/TappaGameCompleted.vue";
import { onMounted, onUnmounted } from "vue";

const data = TAPPE[TappaState.currentIndex];

onMounted(() => {});
onUnmounted(() => {
  TappaState.resetState();
});
</script>

<template>
  <div class="view">
    <!-- TOP NAV -->
    <TappaNav></TappaNav>
    <!-- CONTENT -->
    <div class="content">
      <!-- TAPPE -->
      <template
        v-if="
          TappaState.currentIndex &&
          TappaState.currentIndex < Object.keys(TAPPE).length + 1
        "
      >
        <TappaContent v-if="!TappaState.isGame" :data="data">
          <button id="start-game-button" @click="Nav.openGame">
            Vai al gioco
          </button>
        </TappaContent>

        <TappaGame v-else :data="data.quiz"></TappaGame>

        <TappaGameCompleted
          v-if="TappaState.isGameCompleted"
        ></TappaGameCompleted>
      </template>
      <!-- CUSTOM LAST TAPPA -->
      <template v-else>
        <h1>Arrivederci!</h1>
      </template>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: grid;
  grid-template-rows: auto 1fr;
}
.content {
  @apply w-full;
  /* min-height: calc(100%-4rem); */
}

.contenuto,
.quiz {
  @apply p-4 m-4 bg-white w-full h-full;
}

#start-game-button {
  @apply bg-gray-700 min-h-32 text-4xl;
}
</style>
