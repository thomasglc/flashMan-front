<script setup lang="ts">
import ManeuverList from './components/ManeuverList.vue';
</script>

<template>
  <div class="app">
    <h1>Gestion des manœuvres</h1>
    <router-view></router-view>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}

h1 {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
