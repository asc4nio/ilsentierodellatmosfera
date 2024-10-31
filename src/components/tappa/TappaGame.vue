<script setup>
const props = defineProps(["data"]);

import { TappaState } from "../../stores/appStore";

import GameSort from "../../components/games/sort/GameSort.vue";
import GameDND from "../../components/games/dnd/GameDND.vue";
import GameQuiz from "../../components/games/quiz/GameQuiz.vue";
// import GameQuestion from "../../components/GameQuestion.vue";

import Game01 from "../games/Game01.vue";
import Game02 from "../games/Game02.vue";
import Game03 from "../games/Game03.vue";
import Game04 from "../games/Game04.vue";
import Game05 from "../games/Game05.vue";
import Game06 from "../games/Game06.vue";
import Game07 from "../games/Game07.vue";
import Game08 from "../games/Game08.vue";
import Game09 from "../games/Game09.vue";
import Game10 from "../games/Game10.vue";

const games = [
  Game01,
  Game02,
  Game03,
  Game04,
  Game05,
  Game06,
  Game07,
  Game08,
  Game09,
  Game10,
];
</script>

<template>
  <div class="game">
    <component :is="games[TappaState.currentIndex - 1]"></component>

    <!-- <GameDND></GameDND> -->
    <!-- <GameSort></GameSort> -->
    <!-- <GameQuiz></GameQuiz> -->
  </div>
</template>

<style scoped>
.game {
  @apply relative bg-white w-full h-full;
}
</style>
