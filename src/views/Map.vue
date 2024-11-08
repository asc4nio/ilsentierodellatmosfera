<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

import MapBackground from "../components/map/MapBackground.vue";
import MapTrigger from "../components/map/MapTrigger.vue";
import { onMounted, onUnmounted, ref } from "vue";

import Button from "../components/ui/Button.vue";

const lastTappaIndex = Object.keys(TAPPE).length + 1;

const triggerPositions = [
  { x: "12em", y: "26em" },
  { x: "26em", y: "32em" },
  { x: "40em", y: "36em" },
  { x: "50em", y: "40em" },
  { x: "64em", y: "36em" },
  { x: "80em", y: "32em" },
  { x: "68em", y: "24em" },
  { x: "54em", y: "28em" },
  { x: "24em", y: "16em" },
  { x: "40em", y: "12em" },
  { x: "80em", y: "12em" },
];

function back() {
  Nav.goToWelcome();
}
</script>

<template>
  <div class="view" data-transition="map">
    <MapBackground></MapBackground>

    <div class="triggers">
      <!-- EACH TAPPE -->
      <template v-for="(tappa, index) in TAPPE" :key="index">
        <MapTrigger
          :index="Number(index)"
          :title="tappa.titolo"
          :onClick="
            () => {
              Nav.goToTappa(index);
            }
          "
          :position="triggerPositions[index - 1]"
        ></MapTrigger>
      </template>

      <!-- CUSTOM LAST TAPPA -->
      <MapTrigger
        :index="11"
        title="Verso la vetta"
        :onClick="
          () => {
            Nav.goToTappa(lastTappaIndex);
          }
        "
        :position="triggerPositions[10]"
      ></MapTrigger>
    </div>
    <!-- CLOSE -->
    <div class="close-button">
      <Button :onClick="back"> INDIETRO </Button>
    </div>
  </div>
</template>

<style scoped>
.view {
  @apply relative flex justify-stretch items-end;
}

.close-button {
  @apply absolute top-[1em] left-[1em];
}
.triggers {
  @apply absolute top-0 left-0 w-full h-full;
}
</style>
