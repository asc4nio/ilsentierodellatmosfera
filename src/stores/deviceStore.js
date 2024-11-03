import { reactive } from "vue";

// export const PointerState = reactive({
//   x: 0,
//   y: 0,
// });

export const DeviceState = reactive({
  hasPointer: undefined, // Boolean
  isTouch: undefined, // Boolean
  updateInfo() {
    this.hasPointer = window.matchMedia("(pointer: fine)").matches;
    this.isTouch = window.matchMedia("(pointer: coarse)").matches;
    console.log("DeviceState", this);
  },
});
