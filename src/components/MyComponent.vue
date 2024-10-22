<template>
  <div>
    <h2>{{ message }}</h2>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    message: {
      type: String,
      default: 'Hello from Vue Web Component!',
    },
  },
  setup() {
   
  }
};
</script>
