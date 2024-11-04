<script setup>
const props = defineProps(["data"]);

import { AppState, TappaState, Nav } from "../../stores/appStore";
import { TAPPE } from "../../config/tappe.js";

import { ref, watch } from "vue";
import draggable from "vuedraggable";

import { game } from "./sort/Sort.js";

const options = ref([
  { name: "ESOSFERA", id: 0 },
  { name: "TERMOSFERA", id: 1 },
  { name: "MESOSFERA", id: 2 },
  { name: "STRATOSFERA", id: 3 },
  { name: "TROPOSFERA", id: 4 },
]);

game.randomizeOrder(options);
</script>

<template>
  <h3 class="mb-[1em]">
    {{ props.data.titolo }}
    <!-- Sposta gli strati dell’atmosfera e rimettili nel giusto ordine -->
  </h3>
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
  /* @apply flex; */
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
