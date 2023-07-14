<template>
  <section class="sizes-container">
    <div class="size" v-for="size in size_list">{{ size }}</div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      size_list: this.sizes?.split(","),
    };
  },
  props: {
    sizes: {
      type: String,
    },
  },
};
</script>

<style scoped>
.sizes-container {
  display: flex;
  margin: 20px 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.size {
  background-color: #0cb6e0;
  font-weight: 600;
  padding: 5px;
  color: white;
  border-radius: 10px;
  margin: 10px 10px;
  border: 3px solid white;
}
</style>
