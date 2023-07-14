<template>
  <section class="description-container">{{ description }}</section>
</template>

<script lang="ts">
export default {
  props: {
    description: {
      type: String,
    },
  },
};
</script>

<style scoped>
.description-container {
  display: flex;
  margin: 35px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  color: gray;
  text-align: left;
}
</style>
