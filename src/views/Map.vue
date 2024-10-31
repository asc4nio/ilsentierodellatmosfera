<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

const lastTappaIndex = Object.keys(TAPPE).length + 1;
</script>

<template>
  <div class="view">
    <ol>
      <!-- EACH TAPPE -->
      <template v-for="(tappa, index) in TAPPE" :key="index">
        <li>
          <button @click="Nav.goToTappa(index)">
            {{ index }}
          </button>
          <p>{{ tappa.titolo }}</p>
        </li>
      </template>
      <!-- CUSTOM LAST TAPPA -->
      <li>
        <button @click="Nav.goToTappa(lastTappaIndex)">
          {{ lastTappaIndex }}
        </button>
        <p>Verso la vetta</p>
      </li>
    </ol>
    <!-- CLOSE -->
    <button class="close-button secondary" @click="Nav.goToWelcome">
      Home
    </button>
  </div>
</template>

<style scoped>
.view {
  @apply flex justify-stretch items-end;
}

.close-button {
  @apply absolute top-[1em] left-[1em];
}
ol {
  @apply grid grid-cols-4 p-[2em];
  /* @apply flex flex-col-reverse justify-center items-center flex-wrap; */
}
li {
  @apply px-4 m-2;
}
</style>
