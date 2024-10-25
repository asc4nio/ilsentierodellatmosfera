<script setup>
import { ref, watch } from "vue";
import { AppState } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

import TappaNav from "../components/tappa/TappaNav.vue";
import TappaGame from "../components/tappa/TappaGame.vue";
import TappaContent from "../components/tappa/TappaContent.vue";
import TappaGameCompleted from "../components/tappa/TappaGameCompleted.vue";

const data = TAPPE[AppState.currentTappa];

const isGame = ref(false);
const isGameCompleted = ref(false);

function resetTappa() {
  console.log("RESET");
  isGameCompleted.value = false;
  isGame.value = false;
}
function nextTappa() {
  isGameCompleted.value = false;
  isGame.value = false;
  AppState.nextTappa();
}

function openGame() {
  isGame.value = true;
}
function closeGame() {
  isGame.value = false;
}

function gameCompleted() {
  isGameCompleted.value = true;
}
</script>

<template>
  <div class="view">
    <TappaNav :isGame="isGame" @closeGame="closeGame"></TappaNav>
    <div class="content">
      <template
        v-if="
          AppState.currentTappa &&
          AppState.currentTappa < Object.keys(TAPPE).length + 1
        "
      >
        <TappaContent v-if="!isGame" :data="data">
          <button id="start-game-button" @click="openGame">Vai al gioco</button>
        </TappaContent>

        <TappaGame
          v-else
          :data="data.quiz"
          @gameCompleted="gameCompleted"
        ></TappaGame>

        <TappaGameCompleted
          v-if="isGameCompleted"
          @repeat="resetTappa"
          @nextTappa="nextTappa"
        ></TappaGameCompleted>
      </template>
      <template v-else>
        <h1>Arrivederci!</h1>
      </template>
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply w-full h-full;
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
