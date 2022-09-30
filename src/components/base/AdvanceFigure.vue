<template>
  <figure v-lazyload class="simg">
    <img
        class="w-full h-full shadow-md  hover:shadow-amber-100/50 rounded-xl hover:shadow-2xl fade-in"
        decoding="async"
        :data-src="src.image"
        :alt="src.name"
    />
  </figure>
</template>

<script>
import LazyLoadDirectives from "@/directives/LazyLoadDirectives";
export default {
name: "AdvanceFigure",
  directives: {
    lazyload: LazyLoadDirectives,
  },
  props: {
    src: {
      type: Object,
      defaults: function () {
        return {
          name: 'Чорна Вдова',
          image: 'https://multiplex.ua//images/af/ed/afed45a4a5b9ec38d7b0bb6988ac93c3.jpeg',
        }
      },
    },
  },
}
</script>

<style scoped>

</style>
