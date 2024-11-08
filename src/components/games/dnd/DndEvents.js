import { ref } from "vue";
import { ghost } from "./DndGhost";
import { game } from "./DndGame";

export const events = {
  draggedItemData: ref(null),
  allowTouchDrop: ref(null),
  click: (event) => {
    console.log("click");
  },
  dragstart: (event, itemData) => {
    // TODO: move ghost init to mousedown
    // init ghost
    ghost.init(event);

    // store dragged item data
    events.draggedItemData.value = itemData;

    if (event.type === "dragstart") {
      // set drag effect
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      // hide vanilla drag ghost
      event.dataTransfer.setDragImage(new Image(), 0, 0);
    } else if (event.type === "touchstart") {
      // events.draggedItemData.value = itemData;
    }
  },
  drag: (event) => {
    // update ghost
    ghost.update(event);

    if (event.type === "drag") {
      // console.log("drag target", event.target);
    } else if (event.type === "touchmove") {
      // get correct target box
      const correctTarget = document.getElementById(
        events.draggedItemData.value.target
      );
      const correctTargetBox = correctTarget.getBoundingClientRect();

      // detect the overlap of touchmove into the target
      const touch = event.touches[0];
      const overlaps =
        touch.clientX >= correctTargetBox.left &&
        touch.clientX <= correctTargetBox.right &&
        touch.clientY >= correctTargetBox.top &&
        touch.clientY <= correctTargetBox.bottom;

      // allow drop if overlaps
      events.allowTouchDrop.value = overlaps;

      console.log("events.allowTouchDrop", events.allowTouchDrop.value);
    }
  },
  drop: (event, options, targets) => {
    // remove ghost
    ghost.remove();

    const itemId = events.draggedItemData.value.id;

    if (event.type === "drop") {
      const desiredId = events.draggedItemData.value.target;
      const targetId = event.target.getAttribute("id");

      const acceptDrop = desiredId == targetId;
      if (acceptDrop) {
        game.dropItem(events.draggedItemData, options, targets);
        events.draggedItemData.value = null;
      } else {
        // ghost.unhideDraggedOption(event.target);
        events.draggedItemData.value = null;
        return false;
      }
    } else if (event.type === "touchend") {
      if (events.allowTouchDrop.value) {
        const targetId = events.draggedItemData.value.target;

        game.dropItem(events.draggedItemData, options, targets);
      } else {
        console.warn("restore");
        // ghost.unhideDraggedOption(event.target);
      }

      events.draggedItemData.value = null;
      events.allowTouchDrop.value = false;
    }
  },
};
