<script setup>
const props = defineProps({
  onClick: Function,
  id: String,
});
</script>

<template>
  <button @click="props.onClick" :id="props.id">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-size: 1.25em;
  @apply bg-orange px-[1.5em] py-[.75em] rounded-[1em];
  @apply text-white font-bold uppercase;

  box-shadow: inset 0em -0.33em 0px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out;
}

button:hover,
button:focus {
  background-color: #fd9559;
  box-shadow: inset 0em 0em 0px rgba(0, 0, 0, 0);
}
</style>
