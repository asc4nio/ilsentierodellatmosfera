<script setup>
defineProps({
  data: Object,
});

const emit = defineEmits(["gameCompleted"]);

import GameSort from "../../components/GameSort.vue";
import GameDND from "../../components/GameDND.vue";
import GameQuestion from "../../components/GameQuestion.vue";

import Game01 from "../games/Game01.vue";

function gameCompleted() {
  console.log("COMPLETED outer");
  emit("gameCompleted");
  //   isQuizCompleted.value = true;
}
</script>

<template>
  <div class="game">
    <h2>QUIZ</h2>
    {{ data.titolo }}

    <!-- <Game01></Game01> -->

    <GameDND v-if="data.type == 'dnd'" @completed="gameCompleted"></GameDND>
    <GameSort
      v-else-if="data.type == 'sort'"
      @completed="gameCompleted"
    ></GameSort>
    <GameQuestion
      v-else-if="data.type == 'question'"
      @completed="gameCompleted"
    ></GameQuestion>
  </div>
</template>

<style scoped>
.game {
  @apply p-4 bg-white w-full h-full;
}
</style>
