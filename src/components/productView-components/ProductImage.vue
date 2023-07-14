<template>
  <div class="img_container">
    <img :src="imagen" alt="" />
  </div>
</template>

<style scoped>
.img_container {
  height: 40vh;
  overflow: hidden;
  margin: 5px 0;
}
.img_container img {
  width: 100%;
}
</style>

<script lang="ts">
export default {
  props: {
    imagen: {
      type: String,
    },
  },
};
</script>
