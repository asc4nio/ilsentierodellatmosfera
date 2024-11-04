<script setup>
import { AppState, TappaState, Nav } from "../../stores/appStore";

import { ref } from "vue";

const isExplaination = ref(false);
function toggleExplaination() {
  isExplaination.value = !isExplaination.value;
}
</script>

<template>
  <div id="quiz-completed">
    <h1>CORRETTO</h1>

    <button class="bg-white text-black" @click="toggleExplaination">
      SPIEGAZIONE
    </button>

    <button @click="TappaState.resetContent">Ripeti tappa</button>
    <button @click="Nav.nextTappa">Prossima Tappa</button>
    <button @click="Nav.goToMap">Ritorna alla Mappa</button>
  </div>

  <div id="explaination" v-if="isExplaination">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis labore,
    repellat eos, corporis ut natus officiis excepturi illum totam dignissimos
    at fuga mollitia itaque!

    <button @click="toggleExplaination">Chiudi</button>
  </div>
</template>

<style scoped>
#quiz-completed {
  @apply absolute w-full h-full left-0 top-0;
  @apply bg-blue-dark text-white flex flex-col justify-center items-center;
}

#explaination {
  @apply absolute w-full h-full left-0 top-0;
  @apply p-8 bg-blue-dark text-white flex flex-col justify-center items-center;
}
</style>
