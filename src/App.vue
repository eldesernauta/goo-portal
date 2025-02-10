<template>
  <div class="bg-light-purple-goo">
    <Portal />
  </div>
</template>

<script setup>
import Portal from "./components/Portal/Portal.vue";
document.documentElement.style.setProperty("--light-purple-goo", "#9735ED");
</script>
