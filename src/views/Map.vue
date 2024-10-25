<script setup>
import { AppState } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

const lastTappaIndex = Object.keys(TAPPE).length + 1;
</script>

<template>
  <div class="view">
    <ol>
      <!-- EACH TAPPE -->
      <template v-for="(tappa, index) in TAPPE" :key="index">
        <li>
          <button @click="AppState.goToTappa(index)">
            {{ index }}
          </button>
          <p>{{ tappa.titolo }}</p>
        </li>
      </template>
      <!-- CUSTOM LAST TAPPA -->
      <li>
        <button @click="AppState.goToTappa(lastTappaIndex)">
          {{ lastTappaIndex }}
        </button>
        <p>Verso la vetta</p>
      </li>
      <!-- CLOSE -->
      <li>
        <button class="bg-red-500" @click="AppState.goToWelcome">Close</button>
      </li>
    </ol>
  </div>
</template>

<style scoped>
ol {
  @apply grid grid-cols-3;
  /* @apply flex flex-row justify-start flex-wrap; */
}
li {
  @apply px-4 m-2;
}
</style>
