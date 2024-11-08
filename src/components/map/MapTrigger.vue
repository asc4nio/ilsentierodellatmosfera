<script setup>
const props = defineProps({
  index: Number,
  title: String,
  position: Object,
  onClick: Function,
});
</script>

<template>
  <div class="wrapper">
    <div
      class="number"
      role="button"
      tabindex="0"
      @click="onClick"
      @keydown.enter="onClick"
    >
      <h1>{{ index }}</h1>
    </div>
    <div class="text" role="button" @click="onClick">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply absolute flex flex-col justify-center items-center;
  left: v-bind("props.position.x");
  top: v-bind("props.position.y");
}

.number {
  @apply w-[4em] h-[4em] bg-[#C76E3A] rounded-full;
  @apply font-cubano text-white text-[1.25em];
  @apply flex flex-col justify-center items-center;
  @apply border border-[.5em] border-orange;
}

.text {
  @apply text-center max-w-[16em] mt-[-.5em];
  @apply bg-white px-[1em] py-[.5em] rounded-full;
  @apply border border-[.2em] border-orange;
  line-height: 125%;
}
</style>
