<script setup>
import { ref } from "vue";
import { game } from "./Quiz.js";
// import { reset, log, submit } from "./Quiz.js";

const options = ref([
  {
    name: "Option A",
    id: 1,
    correct: true,
    selected: false,
  },
  {
    name: "Option B",
    id: 2,
    correct: false,
    selected: false,
  },
  {
    name: "Option C",
    id: 3,
    correct: false,
    selected: false,
  },
  {
    name: "Option D",
    id: 4,
    correct: false,
    selected: false,
  },
]);
</script>

<template>
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
