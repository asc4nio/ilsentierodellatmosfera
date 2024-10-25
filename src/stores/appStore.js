import { reactive } from "vue";

export const AppState = reactive({
  // currentView: "welcome",
  // currentTappa: null,
  currentView: "tappa",
  currentTappa: 1,
  goToWelcome() {
    this.currentView = "welcome";
  },
  goToMap() {
    this.currentView = "map";
    this.currentTappa = null;
  },
  goToTappa(index) {
    this.currentView = "tappa";
    this.currentTappa = index;
  },
  nextTappa() {
    this.currentTappa++;
  },
});
