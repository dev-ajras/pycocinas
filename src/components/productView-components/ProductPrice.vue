<template>
  <h4>${{ price }}</h4>
</template>

<style scoped>
h4 {
  color: #0cb6e0;
  margin: 4px 8px;
  font-size: 25px;
}
</style>

<script lang="ts">
export default {
  props: {
    price: {
      type: Number,
    },
  },
};
</script>
