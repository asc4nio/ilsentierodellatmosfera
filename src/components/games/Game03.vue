<script setup>
const props = defineProps(["data"]);

import { ref } from "vue";
import { game } from "./quiz/Quiz.js";
// import { reset, log, submit } from "./Quiz.js";

const options = ref([
  {
    name: "Anidride carbonica",
    id: 0,
    correct: true,
    selected: false,
  },
  {
    name: "Metano",
    id: 1,
    correct: false,
    selected: false,
  },
  {
    name: "Polveri sottili",
    id: 2,
    correct: false,
    selected: false,
  },
  {
    name: "Ozono",
    id: 3,
    correct: false,
    selected: false,
  },
  {
    name: "Clorofluorocarburi",
    id: 4,
    correct: false,
    selected: false,
  },
  {
    name: "Ossigeno",
    id: 5,
    correct: false,
    selected: false,
  },
  {
    name: "Azoto",
    id: 6,
    correct: false,
    selected: false,
  },
  {
    name: "Argon",
    id: 7,
    correct: false,
    selected: false,
  },
]);
</script>

<template>
  <h3 class="mb-[1em]">
    <!-- Seleziona tutte le specie chimiche ricercate -->
    {{ props.data.titolo }}
  </h3>
  <div v-for="option in options">
    <input
      @change="game.log(e, options)"
      type="checkbox"
      :id="'option-' + option.id"
      :name="option.name"
      v-model="option.selected"
    />
    <label :for="'option-' + option.id">{{ option.name }}</label>
  </div>
  <button @click="game.submit(options)">Submit</button>
</template>

<style scoped></style>
