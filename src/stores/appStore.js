import { reactive } from "vue";

export const AppState = reactive({
  currentView: "welcome", // welcome, map, tappa
});

export const TappaState = reactive({
  currentIndex: null, // null, Number
  isGame: false, // Boolean
  isGameCompleted: false, // Boolean
  resetState() {
    console.log("reset TappaState");
    this.currentIndex = null;
    this.isGame = false;
    this.isGameCompleted = false;
  },
  resetContent() {
    console.log("resetContent TappaState");
    this.isGame = false;
    this.isGameCompleted = false;
  },
});

export const Nav = {
  goToWelcome: () => {
    AppState.currentView = "welcome";
  },
  goToMap: () => {
    AppState.currentView = "map";
  },
  goToTappa: (index) => {
    AppState.currentView = "tappa";
    TappaState.currentIndex = index;
  },
  nextTappa: () => {
    TappaState.resetContent();
    TappaState.currentIndex++;
  },
  openGame: () => {
    TappaState.isGame = true;
  },
  closeGame: () => {
    TappaState.isGame = false;
  },
  gameCompleted: () => {
    TappaState.isGameCompleted = true;
  },
};
