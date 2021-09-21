<template>
  <div class="container px-5 md:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-9 py-10">
      <ProductCard
        v-for="productsingle in Productitems"
        :key="productsingle.product"
        :brand="productsingle.brand"
        :product="productsingle.product"
        :selectedVariant="productsingle.selectedVariant"
        :variants="productsingle.variants"
        @button-clicked="addToCart()"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  methods: {
    addToCart() {
      this.$emit("update-cart");
    },
  },
  data() {
    return {
      Productitems: {
        productone: {
          brand: "Vue",
          product: "Socks",
          selectedVariant: 0,
          variants: [
            {
              variantId: 2234,
              variantColor: "green",
              variantImage: require("../images/socks-green.png"),
              variantSale: true,
              variantQuantity: 12,
            },
            {
              variantId: 2235,
              variantColor: "blue",
              variantImage: require("../images/socks-blue.png"),
              variantSale: false,
              variantQuantity: 0,
            },
            {
              variantId: 2236,
              variantColor: "red",
              variantImage: require("../images/socks-blue.png"),
              variantSale: false,
              variantQuantity: 4,
            },
          ],
        },
        producttwo: {
          brand: "Vue",
          product: "Smocks",
          selectedVariant: 0,
          variants: [
            {
              variantId: 2235,
              variantColor: "blue",
              variantImage: require("../images/socks-blue.png"),
              variantSale: false,
              variantQuantity: 1,
            },
            {
              variantId: 2234,
              variantColor: "green",
              variantImage: require("../images/socks-green.png"),
              variantSale: false,
              variantQuantity: 0,
            },
            {
              variantId: 2236,
              variantColor: "red",
              variantImage: require("../images/socks-blue.png"),
              variantSale: false,
              variantQuantity: 4,
            },
          ],
        },
      },
    };
  },
};
</script>