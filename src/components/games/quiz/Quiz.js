import { Nav } from "../../../stores/appStore";

export const game = {
  reset: (options) => {
    console.log("RETRY");
    // reset selected options
    options.forEach((option) => {
      option.selected = false;
    });
  },
  log: (e, options) => {
    console.log(e);
    console.log("options", options);
  },
  submit: (options) => {
    console.log("submit");
    let correctOptions = options.filter((option) => option.correct);
    let wrongOptions = options.filter((option) => !option.correct);

    console.log("correctOptions", correctOptions);
    console.log("wrongOptions", wrongOptions);

    // check if all correct options are selected
    const correctSelected = correctOptions.every((option) => option.selected);
    console.log("correctSelected", correctSelected);

    // check if all wrong options are not selected
    const wrongNotSelected = wrongOptions.every((option) => !option.selected);
    console.log("wrongNotSelected", wrongNotSelected);

    if (correctSelected && wrongNotSelected) {
      // complete();
      console.warn("COMPLETED");
      Nav.gameCompleted();
    } else {
      game.reset(options);
    }
  },
};
