<script setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div id="credits">
    <div id="credits-inner">
      <p class="columns-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos
        quo dolorem excepturi hic fuga doloribus temporibus earum, iure aliquid
        explicabo neque delectus! Fugiat nisi suscipit odit nam saepe placeat
        fugit, unde, sint voluptate natus nemo odio accusamus eaque quaerat
        dolor recusandae provident ipsam sapiente! Maiores sit sint deserunt
        nisi dignissimos adipisci dolore itaque nostrum! Explicabo maiores dicta
        ea provident error nihil hic quas tempora reprehenderit adipisci placeat
        perspiciatis voluptatem ex nulla ratione, atque, repudiandae veniam iure
        eaque? Assumenda esse laborum quasi nobis ex, corrupti inventore quos
        voluptatibus culpa doloribus, dolore eum sequi porro accusamus nihil
        dignissimos quis quidem accusantium qui corporis impedit! Et, ab illo,
        perspiciatis deleniti atque ratione similique, provident nam impedit
        ipsum doloremque sunt accusamus? Temporibus labore, ipsa nulla molestiae
        impedit vero architecto, doloribus minima voluptate, assumenda cumque
        recusandae deleniti aperiam possimus at iste inventore est sit delectus
        laudantium quidem laborum. Unde repellat, cumque reprehenderit,
        praesentium eum rerum magni quidem animi laudantium aperiam veniam?
        Voluptate ullam, mollitia consectetur voluptatibus ipsam sed laborum vel
        magnam laboriosam harum facilis natus perspiciatis blanditiis dolore in
        magni corporis reprehenderit. Corporis, fugiat earum quod autem
        molestiae ut fugit? Nostrum aliquam deleniti repellat porro ad itaque
        laborum asperiores, esse consequatur excepturi voluptatibus et quidem
        iste dolorem officiis quis quam, saepe dolore enim quia. Rem vero maxime
        eius vel debitis. Aliquid, minima. Ullam sunt quam corporis quo vero.
        Beatae temporibus sed, earum a quasi obcaecati natus itaque doloribus!
        Ea fugit eligendi neque perspiciatis ipsa!
      </p>
      <button class="close-button" @click="emit('close')">Chiudi</button>
    </div>
  </div>
</template>

<style scoped>
#credits {
  @apply absolute w-full h-full left-0 top-0 p-[2em];
}
#credits-inner {
  @apply relative w-full h-full p-[4em];
  @apply bg-white border flex flex-col justify-center items-center;
}

.close-button {
  @apply bg-red-500;
  @apply absolute top-[1em] right-[1em];
}
</style>
