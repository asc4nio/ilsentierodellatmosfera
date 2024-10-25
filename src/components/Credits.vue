<script setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div id="credits">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, natus
    reiciendis. Earum autem praesentium commodi mollitia iste dolor nemo, eaque
    delectus dolorem, exercitationem quisquam?
    <button class="bg-red-500" @click="emit('close')">Close</button>
  </div>
</template>

<style scoped>
#credits {
  @apply absolute w-full h-full left-0 top-0;
  @apply bg-slate-950 text-white flex flex-col justify-center items-center;
}
</style>
