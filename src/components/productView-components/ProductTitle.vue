<template>
  <h3>{{ titulo }}</h3>
</template>
<style scoped>
h3 {
  margin: 0px 8px;
}
</style>

<script lang="ts">
export default {
  props: {
    titulo: {
      type: String,
    },
  },
};
</script>
