<script setup lang="ts">
</script>

<template>
  <div class="app">

    <div class="relative">
      <img src="./assets/svg/wave-haikei.svg" alt="Mon SVG" width="100%" class="colored">
      <h1 class="title absolute text-7xl text-white p-5 top-10 left-1/2 -translate-x-1/2 ">FlashMan'</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
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
  background-color: oklab(0.251346 -0.0093526 -0.044559);
  mask-image: url("./assets/svg/wave-haikei.svg");
  -webkit-mask-image: url("./assets/svg/wave-haikei.svg");
}
</style>
