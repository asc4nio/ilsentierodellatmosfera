// import { ref } from "vue";

import { TappaState } from "../../../stores/appStore";

export const game = {
  // state: ref("playing"),
  dropItem: (data, options, targets) => {
    // mark option as placed
    const option = options.find((item) => item.id == data.value.id);
    option.placed = true;

    // add item to target.content
    const target = targets.find((item) => item.id == data.value.target);
    target.content.push(data.value);

    // check if target is solved
    game.solveTarget(data.value, options, targets);
  },
  solveTarget: (data, options, targets) => {
    // get all options in options array wich has targe == targetId
    const targetOptions = options.filter((item) => item.target == data.target);
    // check if all targetOptions are also placed == true
    const solved = targetOptions.every((item) => item.placed == true);

    if (solved) {
      console.warn(data.target, "solved");

      const target = targets.find((item) => item.id == data.target);
      target.solved = true;
      // target.content.push(data);

      // check if game is complete
      game.validateGame(options, targets);
    }
  },
  validateGame: (options, targets) => {
    // check if all options attribute placed is true
    const unplacedItems = options.find((item) => !item.placed);
    if (!unplacedItems) game.complete();

    // else alert("Please place all options");
  },
  complete: () => {
    console.log("COMPLETED");
    TappaState.isGameCompleted = true;
    console.log(TappaState);
  },
};
