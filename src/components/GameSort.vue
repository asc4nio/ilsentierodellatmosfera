<script setup>
import { AppState } from "../stores/appStore";

import { TAPPE } from "../config/tappe.js";
const data = TAPPE[AppState.currentTappa];

const emit = defineEmits(["completed"]);

import { ref, watch } from "vue";
import draggable from "vuedraggable";

const optionsCount = 6;
const options = ref([]);
for (let i = 0; i < optionsCount; i++) {
  options.value.push({ name: "DraggableItem", id: i });
}

function log(evt) {
  console.log("draggable-changed", evt);
}

function submit() {
  const isCorrectOrder = options.value.every((obj, index) => obj.id === index);
  console.warn("isCorrectOrder", isCorrectOrder); // true o false

  if (isCorrectOrder) complete();
}

function complete() {
  console.log("COMPLETED");
  emit("completed");
}
</script>

<template>
  <draggable
    class="list"
    :list="options"
    group="people"
    @change="log"
    itemKey="name"
    ghostClass="sortable-ghost-dragged"
    chosenClass="sortable-chosen"
    dragClass="sortable-drag"
    sort="true"
  >
    <template #item="{ element, index }">
      <div data-drag="source" class="draggable-item">
        {{ element.name }} {{ element.id }}
      </div>
    </template>
  </draggable>
  <button @click="submit()">Submit</button>
</template>

<style scoped>
.list {
  @apply m-4 p-2 border border-black min-h-4;
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
/* .sortable-ghost-desination {
  @apply bg-violet-200;
} */
.sortable-drag {
  @apply bg-red-200;
}
</style>
