<script setup>
import { AppState, TappaState, Nav } from "../stores/appStore";
import { useTemplateRef, onMounted, onUnmounted, ref } from "vue";
import Credits from "../components/Credits.vue";

import Button from "../components/ui/Button.vue";
import WelcomeBackground from "../components/welcome/WelcomeBackground.vue";

import { sleep } from "../components/utils";

import SplitType from "split-type";
import gsap from "gsap";

import { openFullscreen, closeFullscreen } from "../components/utils";
const isCredits = ref(false);

// const title = new SplitType("#logo-title");
// console.log(title);

function toggleCredits() {
  isCredits.value = !isCredits.value;
}
function start() {
  // openFullscreen();
  Nav.goToMap();
}

let title;

onMounted(async () => {
  title = new SplitType("#logo-title");
  console.log(title);

  gsap.set(title.chars, {
    scale: 0,
  });
  gsap.set(".subtitle", {
    scale: 0,
  });
  gsap.set("#start-button", {
    scale: 0,
  });
  gsap.set("#credits", {
    translateY: "-20em",
  });

  await sleep(1000);
  gsap
    .timeline()
    .to(
      title.chars,
      {
        stagger: 0.05,
        scale: 1,
        duration: 0.2,
      },
      0
    )
    .to(
      ".subtitle",
      {
        scale: 1,
        duration: 1,
      },
      ">"
    )
    .to(
      "#start-button",
      {
        scale: 1,
        duration: 1,
      },
      ">"
    );
});
</script>

<template>
  <div class="view" data-transition="welcome">
    <WelcomeBackground></WelcomeBackground>
    <!-- ACTION BOX -->
    <div class="action">
      <div class="logo">
        <h1 class="title" id="logo-title">
          Il sentiero <br />
          dell’atmosfera
        </h1>
        <p class="subtitle">Un percorso di speranza per il futuro</p>
      </div>
      <Button :id="'start-button'" :onClick="start">Inizia</Button>
    </div>
    <!-- SPONSOR BOX -->
    <div class="sponsor">
      <div class="sponsor-list flex">
        <p class="mr-[.75em]">Indici Opponibili</p>
        <p>Tecnoscienza</p>
      </div>

      <div class="credits-toggle" @click="toggleCredits" role="button">
        CREDITS
      </div>
    </div>
    <Credits @close="toggleCredits" v-if="isCredits" />
  </div>
</template>
<style scoped>
.view {
  @apply flex flex-col justify-items-stretch items-stretch;
  @apply p-[2em] w-full h-full;
}
.action {
  @apply flex-grow flex flex-col justify-center items-center;
}
.logo {
  @apply flex flex-col justify-center items-center;
}
.logo > .title {
  @apply font-cubano text-center text-[4.5em] text-white leading-[100%];
  @apply mb-[0.2em];
  -webkit-text-stroke-width: 0.005em;
  -webkit-text-stroke-color: #f98949;
  filter: drop-shadow(0em 0.12em 0em #925c3d);
}
.logo > .subtitle {
  @apply text-center text-[2em];
  @apply px-[1em] py-[0.1em] mb-[0.5em];
  @apply bg-white border border-orange border-[.1em] rounded-full;
}
.sponsor {
  @apply flex-grow-0 p-[1em] bg-white;
  @apply flex justify-between items-center;
}
.credits-toggle {
  @apply underline;
}
</style>
