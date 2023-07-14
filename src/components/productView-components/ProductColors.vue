<template>
  <section class="color-selector">
    <h4>Color:</h4>
    <div
      class="circle"
      v-for="color in colors"
      :style="{ backgroundColor: color as string }"
    ></div>
  </section>
</template>

<style scoped>
.color-selector {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.color-selector h4 {
  margin: 2px 0px;
}

.circle {
  cursor: pointer;
  border-radius: 100%;
  margin: 6px 10px;
  width: 15px;
  height: 15px;
}
</style>

<script lang="ts">
export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
};
</script>
