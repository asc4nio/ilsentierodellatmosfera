<script setup>
const props = defineProps(["data"]);

import { ref } from "vue";
import { game } from "./quiz/Quiz.js";
// import { reset, log, submit } from "./Quiz.js";

const options = ref([
  {
    name: "8C°",
    id: 0,
    correct: true,
    selected: false,
  },
  {
    name: "6C°",
    id: 1,
    correct: false,
    selected: false,
  },
  {
    name: "0C°",
    id: 2,
    correct: false,
    selected: false,
  },
  {
    name: "-18C°",
    id: 3,
    correct: false,
    selected: false,
  },
]);
</script>

<template>
  <h3 class="mb-[1em]">
    <!-- Indovina la temperatura media terrestre senza l’effetto serra -->
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
