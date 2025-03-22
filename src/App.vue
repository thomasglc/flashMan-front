<script setup lang="ts">
</script>

<template>
  <div class="app">

    <div>
      <img src="./assets/svg/wave-haikei.svg" alt="Mon SVG" class="colored h-64 md:hidden">
      <img src="./assets/svg/layered-waves-haikei.svg" alt="Mon SVG" class="hidden md:block w-full h-96 object-cover">
      <h1 class="title absolute text-7xl text-white p-5 top-10 left-1/2 -translate-x-1/2 ">FlashMan'</h1>
    </div>
    <router-view></router-view>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Oswald:wght@200..700&family=Sedgwick+Ave+Display&display=swap');

.app {
  min-height: 100vh;
}

.title {
  font-family: "Sedgwick Ave Display", cursive;
  font-weight: 400;
  font-style: oblique;
  text-shadow: 3px 2px 5px var(--color-primary);
}

.colored {
  width: 100%;
  /* Prend toute la largeur de l'écran */
  height: 300px;
  background-color: oklab(0.251346 -0.0093526 -0.044559);
  mask-image: url("./assets/svg/wave-haikei.svg");
  background-repeat: no-repeat;
}
</style>
