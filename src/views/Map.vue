<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { TAPPE } from "../config/tappe.js";

import Button from "../components/ui/Button.vue";

const lastTappaIndex = Object.keys(TAPPE).length + 1;
</script>

<template>
  <div class="view">
    <ol>
      <!-- EACH TAPPE -->
      <template v-for="(tappa, index) in TAPPE" :key="index">
        <li>
          <Button
            :onClick="
              () => {
                Nav.goToTappa(index);
              }
            "
          >
            {{ index }}
          </Button>
          <p>{{ tappa.titolo }}</p>
        </li>
      </template>
      <!-- CUSTOM LAST TAPPA -->
      <li>
        <Button
          :onClick="
            () => {
              Nav.goToTappa(lastTappaIndex);
            }
          "
        >
          {{ lastTappaIndex }}
        </Button>
        <p>Verso la vetta</p>
      </li>
    </ol>
    <!-- CLOSE -->
    <div class="close-button">
      <Button
        :onClick="
          () => {
            Nav.goToWelcome();
          }
        "
      >
        INDIETRO
      </Button>
    </div>
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
