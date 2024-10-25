<script setup>
/**
 * https://www.youtube.com/watch?v=-kZLD40d-tI
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 *
 * touch doc:
 * https://stackoverflow.com/questions/68000255/html-drag-and-drop-on-touchscreen
 */

import { ref } from "vue";
const emit = defineEmits(["completed"]);

// init stores
// const options = ref([]);
// const targets = ref([]);

// init data
// const optionsCount = 3;
// for (let i = 0; i < optionsCount; i++) {
//   options.value.push({ name: "DraggableItem", id: i });
//   targets.value.push({ name: "DraggableTarget", id: i, solved: false });
// }

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

// LOCAL STORES
const draggedItemData = ref(null);
const allowTouchDrop = ref(false);

// GENERIC EVENTS
const onClick = (event) => {
  console.log("onClick", event);
};

// UNIFIED EVENTS
function onDragStart(event, itemData) {
  initGhost(event);
  // hideDraggedOption(event.target);

  // store dragged item data
  draggedItemData.value = itemData;

  if (event.type === "dragstart") {
    // set drag effect
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    // hide vanilla drag ghost
    event.dataTransfer.setDragImage(new Image(), 0, 0);
  } else if (event.type === "touchstart") {
    // draggedItemData.value = itemData;
  }
}
function onDrag(event) {
  updateGhost(event);

  if (event.type === "drag") {
  } else if (event.type === "touchmove") {
    // get correct target box
    const correctTarget = document.getElementById(draggedItemData.value.target);
    const correctTargetBox = correctTarget.getBoundingClientRect();

    // detect the overlap of touchmove into the target
    const touch = event.touches[0];
    const overlaps =
      touch.clientX >= correctTargetBox.left &&
      touch.clientX <= correctTargetBox.right &&
      touch.clientY >= correctTargetBox.top &&
      touch.clientY <= correctTargetBox.bottom;

    // allow drop if overlaps
    allowTouchDrop.value = overlaps;

    console.log("allowTouchDrop", allowTouchDrop.value);

    /*
    if (overlaps) {
      // allow drop
      allowTouchDrop.value = true;
      console.log("OH YEAH");
    } else {
      // don't allow drop
      allowTouchDrop.value = false;
      console.log("NOPE");
    }
      */
  }
}
function onDrop(event) {
  removeGhost();
  const itemId = draggedItemData.value.id;

  if (event.type === "drop") {
    const desiredId = draggedItemData.value.target;
    const targetId = event.target.getAttribute("id");

    const acceptDrop = desiredId == targetId;
    if (acceptDrop) {
      dropItem(itemId, targetId, draggedItemData);
      draggedItemData.value = null;
    } else {
      unhideDraggedOption(event.target);
      draggedItemData.value = null;
      return false;
    }
  } else if (event.type === "touchend") {
    if (allowTouchDrop.value) {
      const targetId = draggedItemData.value.target;

      dropItem(itemId, targetId, draggedItemData);
    } else {
      console.warn("restore");
      unhideDraggedOption(event.target);
    }

    draggedItemData.value = null;
    allowTouchDrop.value = false;
  }
}

// GHOST
function initGhost(event) {
  // removeGhost();
  let dragGhost = document.createElement("div");
  dragGhost.setAttribute("id", "drag-ghost");

  let itemClone = event.target.cloneNode(true);
  dragGhost.appendChild(itemClone);

  let left, top;

  if (event.type === "drag") {
    left = event.pageX;
    top = event.pageY;
  } else if (event.type === "touchmove") {
    left = event.touches[0].pageX;
    top = event.touches[0].pageY;
  }

  // let left = event.touches[0].pageX;
  // let top = event.touches[0].pageY;
  dragGhost.style.left = left + "px";
  dragGhost.style.top = top + "px";

  document.getElementById("app").appendChild(dragGhost);
}
function updateGhost(event) {
  let dragGhost = document.getElementById("drag-ghost");

  let left, top;

  if (event.type === "drag") {
    left = event.pageX;
    top = event.pageY;
  } else if (event.type === "touchmove") {
    left = event.touches[0].pageX;
    top = event.touches[0].pageY;
  }

  // let left = event.touches[0].pageX;
  // let top = event.touches[0].pageY;

  dragGhost.style.left = left + "px";
  dragGhost.style.top = top + "px";
}
function removeGhost() {
  let dragGhost = document.getElementById("drag-ghost");
  if (dragGhost) dragGhost.remove();
}

// GAME METHODS
function dropItem(itemId, targetId, data) {
  // mark option as placed
  const option = options.value.find((item) => item.id == itemId);
  option.placed = true;

  // mark target as solved
  const target = targets.value.find((item) => item.id == targetId);
  target.content.push(data);
  target.solved = true;

  validateGame();
}

function hideDraggedOption(element) {
  // element.style.opacity = 0;
  element.style.display = "none";
}

function unhideDraggedOption(element) {
  // element.style.opacity = 1;
  element.style.display = "block";
}

function validateGame() {
  // check if all options attribute placed is true
  const unplacedItems = options.value.find((item) => !item.placed);
  if (!unplacedItems) complete();

  // else alert("Please place all options");
}

function complete() {
  console.log("COMPLETED");
  emit("completed");
}
</script>

<template>
  <div id="draggable-options" class="mb-8">
    <!-- each option -->
    <template v-for="optionData in options" :key="optionData.id">
      <div
        v-if="!optionData.placed"
        :id="optionData.id"
        class="draggable-item"
        draggable="true"
        @click="onClick($event)"
        @dragstart="onDragStart($event, optionData)"
        @drag="onDrag($event)"
        @drop="onDrop($event)"
        @dragend="removeGhost"
        @dragenter.prevent
        @dragover.prevent
        @touchstart="onDragStart($event, optionData)"
        @touchmove="onDrag($event)"
        @touchend="onDrop($event)"
      >
        {{ optionData.id }}
      </div>
    </template>

    <!-- <div
      class="draggable-item"
      :key="item.id"
      v-for="item in options"
      draggable="true"
      @click="onClick($event)"
      @dragstart="onDragStart($event, item)"
      @drag="onDrag($event)"
      @drop="onDrop($event)"
      @dragend="removeGhost"
      @dragenter.prevent
      @dragover.prevent
      @touchstart="onDragStart($event, item)"
      @touchmove="onDrag($event, item)"
      @touchend="onDrop($event, item)"
    >
      {{ item.name }}
      {{ item.id }}
    </div> -->
  </div>

  <div id="draggable-targets">
    <!-- each target -->
    <template v-for="targetData in targets" :key="targetData.id">
      <div
        class="draggable-target"
        :id="targetData.id"
        :draggable="!targetData.solved"
        @drop="onDrop($event)"
        @dragenter.prevent
        @dragover.prevent
      >
        {{ targetData.id }}

        <p v-if="targetData.solved">SOLVED</p>
      </div>
    </template>
    <!-- <div
      class="draggable-target"
      :key="item.id"
      v-for="item in targets"
      :draggable="!item.solved"
      @drop="onDrop($event, targets)"
      @dragenter.prevent
      @dragover.prevent
      :data-accept-id="item.id"
    >
      {{ item.name }}
      {{ item.id }}
      <p v-if="item.solved">SOLVED</p>
    </div> -->
  </div>
</template>

<style scoped>
:global(#drag-ghost) {
  @apply min-h-20 min-w-20 bg-red-500 pointer-events-none select-none;
  @apply absolute z-10;
}

.draggable-item {
  @apply p-2 border border-black touch-auto;
}
.draggable-target {
  @apply p-2 border border-black min-h-10 min-w-10;
}
</style>
