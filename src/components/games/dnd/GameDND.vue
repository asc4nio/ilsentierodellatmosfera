<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Game title",
  },
});

import DndOption from "./DndOption.vue";
import DndTarget from "./DndTarget.vue";

const options = ref([
  {
    id: "option-1",
    target: "target-1",
    placed: false,
  },
  {
    id: "option-2",
    target: "target-2",
    placed: false,
  },
  {
    id: "option-3",
    target: "target-3",
    placed: false,
  },
  {
    id: "option-4",
    target: "target-3",
    placed: false,
  },
]);
const targets = ref([
  {
    id: "target-1",
    content: [],
    solved: false,
  },
  {
    id: "target-2",
    content: [],
    solved: false,
  },
  {
    id: "target-3",
    content: [],
    solved: false,
  },
]);
</script>

<template>
  <div id="game-view">
    <!-- TARGETS -->
    <div id="targets-panel">
      <div id="targets-list">
        <!-- each target -->
        <template v-for="targetData in targets" :key="targetData.id">
          <DndTarget :data="targetData" :options="options" :targets="targets">
            <div class="target">
              <p>
                {{ targetData.id }}
              </p>
              <template v-for="placedOption in targetData.content">
                <!-- <p>{{ placedOption.id }}</p> -->
                <p>{{ placedOption.id }}</p>
              </template>
              <p v-if="targetData.solved">SOLVED</p>
            </div>
          </DndTarget>
        </template>
      </div>
    </div>

    <!-- OPTIONS -->
    <div id="options-panel">
      <h3 class="mb-[1em]">{{ props.title }}</h3>

      <!-- <slot></slot> -->
      <div id="options-list" class="mb-8">
        <!-- each option -->
        <template v-for="optionData in options" :key="optionData.id">
          <DndOption
            v-if="!optionData.placed"
            :data="optionData"
            :options="options"
            :targets="targets"
          >
            <div class="option">
              <p>{{ optionData.id }}</p>
            </div>
          </DndOption>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* game frame */
#game-view {
  @apply absolute top-0 left-0 w-full h-full;
  /* @apply bg-pink-300; */

  display: grid;
  grid-template-rows: 1fr auto;
}

/* frame rows */
#options-panel {
  @apply bg-off-white  flex flex-col justify-center items-center p-[2em];
}
#targets-panel {
  @apply flex flex-col justify-center items-center p-[2em];
}

/* lists */
#options-list {
  @apply flex flex-row flex-wrap justify-center;
}
#targets-list {
  @apply flex flex-row flex-wrap justify-center;
}

/* items */
.option {
  @apply p-[.5em] m-[.5em] border border-black border-[.1em] touch-auto;
}
.target {
  @apply select-none pointer-events-none;
  @apply p-[.5em] m-[.5em] border min-h-10 min-w-10;
  @apply border border-black border-[.1em];
}

/* dnd ghost */
:global(#drag-ghost) {
  @apply bg-red-500 pointer-events-none select-none;
  @apply absolute z-10;
}
</style>
