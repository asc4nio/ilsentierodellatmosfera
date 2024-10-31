<script setup>
const props = defineProps(["data", "options", "targets"]);

import { events } from "./DndEvents";
</script>

<template>
  <div
    class="draggable-target"
    :class="data.solved ? 'solved' : ''"
    :id="data.id"
    @drop="events.drop($event, options, targets)"
    @dragenter.prevent
    @dragover.prevent
  >
    <slot></slot>
  </div>
</template>

<style scoped>
/* .draggable-target {
  @apply p-2 border border-black min-h-10 min-w-10;
} */
</style>
