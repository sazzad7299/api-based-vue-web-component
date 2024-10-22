<script setup>
import HelloWorld from './components/HelloWorld.vue'
import './MyCustomElement';
</script>

<template>
  <my-custom-element message="Custom Element Message!"></my-custom-element>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
