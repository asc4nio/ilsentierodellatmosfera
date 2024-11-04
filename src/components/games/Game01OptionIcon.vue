<script setup>
const props = defineProps({
  id: String,
});

import algeria from "../../assets/games/gam01-icon-algeria.svg";
import armenia from "../../assets/games/gam01-icon-armenia.svg";
import austria from "../../assets/games/gam01-icon-austria.svg";
import kenya from "../../assets/games/gam01-icon-kenya.svg";
import swiss from "../../assets/games/gam01-icon-swiss.svg";
import usa from "../../assets/games/gam01-icon-usa.svg";
import spain from "../../assets/games/gam01-icon-spain.svg";
import france from "../../assets/games/gam01-icon-france.svg";
import germany from "../../assets/games/gam01-icon-germany.svg";
import china from "../../assets/games/gam01-icon-china.svg";
import nepal from "../../assets/games/gam01-icon-nepal.svg";

const icons = {
  algeria,
  armenia,
  austria,
  kenya,
  swiss,
  usa,
  spain,
  france,
  germany,
  china,
  nepal,
};
</script>

<template>
  <img :src="icons[props.id]" :alt="props.id" />
</template>

<style scoped>
img {
  height: 2em;
}
</style>
