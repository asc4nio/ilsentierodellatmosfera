<script setup>
import { ref } from "vue";
import { reset, log, submit } from "./QuizGame,js";

const options = ref(
  [
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
  ],
  {
    deep: true,
  }
);

// const emit = defineEmits(["completed"]);

// function complete() {
//   console.log("COMPLETED");
//   emit("completed");
// }

// function reset() {
//   console.log("RETRY");
//   // reset selected options
//   options.value.forEach((option) => {
//     option.selected = false;
//   });
// }

// function log(evt) {
//   console.log(evt);
//   console.log("options", options.value);
// }

// function submit(options) {
//   console.log("submit");
//   let correctOptions = options.value.filter((option) => option.correct);
//   let wrongOptions = options.value.filter((option) => !option.correct);

//   console.log("correctOptions", correctOptions);
//   console.log("wrongOptions", wrongOptions);

//   // check if all correct options are selected
//   const correctSelected = correctOptions.every((option) => option.selected);
//   console.log("correctSelected", correctSelected);

//   // check if all wrong options are not selected
//   const wrongNotSelected = wrongOptions.every((option) => !option.selected);
//   console.log("wrongNotSelected", wrongNotSelected);

//   if (correctSelected && wrongNotSelected) {
//     complete();
//   } else {
//     reset(options);
//   }
// }
</script>

<template>
  <div v-for="option in options">
    <input
      @change="log(e, options)"
      type="checkbox"
      :id="'option-' + option.id"
      :name="option.name"
      v-model="option.selected"
    />
    <label :for="'option-' + option.id">{{ option.name }}</label>
  </div>
  <button @click="submit(options)">Submit</button>
</template>

<style scoped></style>
