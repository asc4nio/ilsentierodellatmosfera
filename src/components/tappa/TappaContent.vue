<script setup>
defineProps({
  data: Object,
});
</script>

<template>
  <div class="wrapper">
    <div id="tappa-contenuto">
      <div id="tappa-text">
        <h1 class="mb-12">
          {{ data.titolo }}
        </h1>
        <p class="mb-8 text-balance" v-for="item in data.contenuto">
          {{ item }}
        </p>
      </div>
      <div id="tappa-image"></div>
    </div>
    <!-- passed in open game button -->
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  @apply relative w-full h-full;
  display: grid;
  grid-template-rows: 1fr auto;
}

#tappa-contenuto {
  @apply bg-white flex-grow;
  @apply grid grid-cols-2;

  max-height: 100%;

  overflow: clip;
}

#tappa-text {
  @apply p-16;
}

#tappa-image {
  @apply bg-cover bg-center;
  background-image: url("../../assets/image-placeholder.jpg");
}

button {
  @apply flex-grow-0;
}
</style>
