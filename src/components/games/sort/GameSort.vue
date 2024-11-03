<script setup>
import { AppState, TappaState, Nav } from "../../../stores/appStore";
import { TAPPE } from "../../../config/tappe.js";

import { ref, watch } from "vue";
import draggable from "vuedraggable";

import { game } from "./Sort.js";

// const data = TAPPE[TappaState.currentIndex];

const optionsCount = 6;
const options = ref([]);
for (let i = 0; i < optionsCount; i++) {
  options.value.push({ name: "DraggableItem", id: i });
}

game.randomizeOrder(options);
</script>

<template>
  <draggable
    class="list"
    :list="options"
    @change="game.log"
    itemKey="id"
    ghostClass="sortable-ghost-dragged"
    chosenClass="sortable-chosen"
    dragClass="sortable-drag"
    sort="true"
  >
    <template #item="{ element, index }">
      <div class="draggable-item">{{ element.name }} {{ element.id }}</div>
    </template>
  </draggable>
  <button @click="game.submit(options)">Submit</button>
</template>

<style scoped>
.list {
  @apply m-4 p-2 border border-black min-h-4;
  @apply flex;
}

.draggable-item {
  @apply p-2 border border-black;
}
.sortable-chosen {
  @apply bg-yellow-200;
}
.sortable-ghost-dragged {
  @apply bg-violet-200;
  /* display: none; */
}
.sortable-drag {
  @apply bg-red-200;
  /* display: none; */
}
</style>
