<template>
  <ProductImage :imagen="product.images[0]" />
  <ProductTitle :titulo="product.name" />
  <ProductPrice :price="product.price" />
  <ProductColors :colors="product.colores" />
  <ProductSizes :sizes="product.sizes" />
  <ProductDescription :description="product.description" />
</template>

<script lang="ts">
import ProductImage from "./ProductImage.vue";
import ProductTitle from "./ProductTitle.vue";
import ProductPrice from "./ProductPrice.vue";
import ProductColors from "./ProductColors.vue";
import ProductSizes from "./ProductSizes.vue";
import ProductDescription from "./ProductDescription.vue";
export default {
  data() {
    return {
      product: {
        images: ["../src/assets/imagen-prueba.jpg"],
        name: "Mueble de prueba",
        sizes: "120x150,150x190,180x110,220x100,120x150,150x190",
        price: 2000,
        colores: ["green", "red", "blue", "gold", "black", "pink"],
        description:
          "lorem asdasda dasdsadasd asdokgfgfg doasdoasodasd asdasodasdasdo dasodsad oasdas oasdasd oasdosadoasdoasd adosadoasd oasdsdo  dsoodasd  odsdoasd oa dasodsad oasdas oasdasd oasdosadoasdoasd adosadoasd oasdsdo  dsoodasd  odsdoasd oa dasodsad oasdas oasdasd oasdosadoasdoasd adosadoasd oasdsdo  dsoodasd  odsdoasd oa d oasdsdo  dsoodasd  odsdoasd oa dasodsad oasdas oasdasd oasdosadoasdoasd adosadoasd oasdsdo  dsoodasd  odsdoasd oa dasodsad oasdas oasdasd oasdosadoasdoasd adosadoasd oasdsdo  dsoodasd  odsdoasd oa  ",
      },
      //how colors must travel
    };
  },
  components: {
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductColors,
    ProductSizes,
    ProductDescription,
  },
};
</script>
