import { Nav } from "../../../stores/appStore";

export function submit(options) {
  const isCorrectOrder = options.every((obj, index) => obj.id === index);
  console.warn("isCorrectOrder", isCorrectOrder); // true o false

  if (isCorrectOrder) Nav.gameCompleted();
}

export const randomizeOrder = (array) => {
  for (let i = 0; i < array.value.length; i++) {
    array.value = array.value
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, array.value.length);
  }
};

export function log(evt) {
  console.log("draggable-changed", evt);
}
