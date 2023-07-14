<template>
  <div class="back">
    <a href="#">
      <img src="../assets/flecha.png" alt="" />
    </a>
  </div>
  <Product />
  <ProductContact />
</template>

<script lang="ts">
import ProductContact from "../components/productView-components/ProductContact.vue";
import Product from "../components/productView-components/Product.vue";

export default {
  components: {
    Product,
    ProductContact,
  },
};
</script>

<style scoped>
.back {
  width: 30px;
  margin: 5px;
}
.back img {
  width: 100%;
}
</style>
