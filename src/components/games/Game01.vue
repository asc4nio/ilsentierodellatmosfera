<script setup>
import { ref, watch } from "vue";

const props = defineProps(["data"]);

import DndOption from "./dnd/DndOption.vue";
import DndTarget from "./dnd/DndTarget.vue";

import Game01OptionIcon from "./Game01OptionIcon.vue";

const options = ref([
  /**
   * Option: Object
   * {
      id: String,
      target: String,
      placed: Boolean
      visual: {
        text: String
      }
  }
 */
  {
    target: "austria",
    visual: {
      text: "Sonniblick - 3106 m",
    },
  },
  {
    target: "armenia",
    visual: {
      text: "Amberd - 2071 m",
    },
  },
  {
    target: "swiss",
    visual: {
      text: "Jungfraujoch - 3560 m",
    },
  },
  {
    target: "usa",
    visual: {
      text: "Mauna Loa - 3397 m",
    },
  },
  {
    target: "bolivia",
    visual: {
      text: "Chacaltaya - 5240 m",
    },
  },
  {
    target: "spain",
    visual: {
      text: "Izana - 2377 m",
    },
  },
  {
    target: "algeria",
    visual: {
      text: "Assekrem - 2728 m",
    },
  },
  {
    target: "kenya",
    visual: {
      text: "Mt. Kenya - 3678 m",
    },
  },
  {
    target: "france",
    visual: {
      text: "La Réunion - 2160 m",
    },
  },
  {
    target: "germany",
    visual: {
      text: "Zugspitze - 2962 m",
    },
  },
  {
    target: "china",
    visual: {
      text: "Mt. Waliguan - 3810 m",
    },
  },
  {
    target: "nepal",
    visual: {
      text: "NCO-P - 5079 m",
    },
  },
]);

for (let i = 0; i < options.value.length; i++) {
  options.value[i].id = "option-" + i;
  options.value[i].placed = false;
}

const targets = ref([
  /**
   * Target: Object
   * {
      id: String,
      content: empty Array,
      solved: Boolean,
      visual: {
        text: String
      }
 }
 */
  {
    id: "austria",
  },
  {
    id: "armenia",
  },
  {
    id: "swiss",
  },
  {
    id: "usa",
  },
  {
    id: "bolivia",
  },
  {
    id: "spain",
  },
  {
    id: "algeria",
  },
  {
    id: "kenya",
  },
  {
    id: "france",
  },
  {
    id: "germany",
  },
  {
    id: "china",
  },
  {
    id: "nepal",
  },
]);

for (let i = 0; i < targets.value.length; i++) {
  targets.value[i].content = [];
  targets.value[i].solved = false;
  targets.value[i].visual = {
    text: targets.value[i].id,
  };
}
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
                {{ targetData.visual.text }}
              </p>
              <template v-for="placedOption in targetData.content">
                <!-- <p>{{ placedOption.id }}</p> -->
                <p>{{ placedOption.visual.text }}</p>
              </template>
              <p v-if="targetData.solved">SOLVED</p>
            </div>
          </DndTarget>
        </template>
      </div>
    </div>

    <!-- OPTIONS -->
    <div id="options-panel">
      <h3 class="mb-[1em]">
        {{ props.data.titolo }}
        <!-- Trascina le stazioni di alta quota nel punto corretto -->
      </h3>

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
              <Game01OptionIcon :id="optionData.target" />
              <p>{{ optionData.visual.text }}</p>
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
  @apply bg-blue-dark text-white flex flex-col justify-center items-center p-[2em];
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
  @apply px-[1em] py-[.5em] m-[.5em] touch-auto;
  @apply flex justify-center items-center;
  @apply bg-orange text-white font-semibold;
  @apply rounded-[1em]
  /* @apply p-[.5em] m-[.5em] border border-black border-[.1em] touch-auto; */;
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
