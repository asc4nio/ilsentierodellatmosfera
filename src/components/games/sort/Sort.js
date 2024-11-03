import { Nav } from "../../../stores/appStore";

export const game = {
  randomizeOrder: (array) => {
    for (let i = 0; i < array.value.length; i++) {
      array.value = array.value
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, array.value.length);
    }
  },
  submit: (options) => {
    const isCorrectOrder = options.every((obj, index) => obj.id === index); // Boolean
    console.warn("isCorrectOrder", isCorrectOrder);
    if (isCorrectOrder) Nav.gameCompleted();
  },
  log: (e) => {
    console.log("draggable-changed", e);
  },
};
