<script setup>
import { AppState } from "../stores/appStore";
import { ref } from "vue";
import Credits from "../components/Credits.vue";

const isCredits = ref(false);

function start() {
  AppState.goToMap();
}

function toggleCredits() {
  isCredits.value = !isCredits.value;
}
</script>

<template>
  <div class="view">
    <div id="welcome">
      <!-- ACTION -->
      <div class="box">
        <h1 class="mb-2">Il sentiero dell’atmosfera</h1>
        <p class="mb-4">Un percorso di speranza per il futuro</p>
        <button @click="start">Inizia</button>
      </div>
      <!-- SPONSOR -->
      <div class="sponsor">
        <p>Indici Opponibili</p>
        <div class="credits-toggle" @click="toggleCredits" role="button">
          CREDITS
        </div>
      </div>
      <Credits @close="toggleCredits" v-if="isCredits" />
    </div>
  </div>
</template>

<style scoped>
/* .view {
  @apply flex flex-col justify-center items-center;
} */
#welcome {
  @apply flex flex-col justify-items-stretch items-stretch;
  @apply p-4 w-full h-full;
}
.box {
  @apply flex-grow flex flex-col justify-center items-center;
}
.sponsor {
  @apply flex-grow-0 p-4 bg-white flex justify-between items-center;
}

.credits-toggle {
  @apply underline;
}
</style>
