<script setup>
const props = defineProps(["data", "options", "targets"]);

import { events } from "./DndEvents";
import { ghost } from "./DndGhost";
</script>

<template>
  <div
    :id="data.id"
    class="draggable-option"
    draggable="true"
    @click="events.click($event)"
    @dragstart="events.dragstart($event, data)"
    @drag="events.drag($event)"
    @drop="events.drop($event, options, targets)"
    @dragend="ghost.remove"
    @dragenter.prevent
    @dragover.prevent
    @touchstart="events.dragstart($event, data)"
    @touchmove="events.drag($event)"
    @touchend="events.drop($event, options, targets)"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
/* .draggable-option {
  @apply p-2 border border-black touch-auto;
} */
</style>
