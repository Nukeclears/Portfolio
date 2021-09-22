<template>
  <div class="container px-5 md:px-0">
    <div class="grid grid-cols-12 gap-10 py-10">
      <div class="col-span-12 lg:col-span-2">
        <div class="flex flex-col">
          <h2 class="text-2xl mb-5">Filters</h2>
          <div v-for="(item) in Filtering.checkboxProductType" :key="item.value" class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text text-lg">{{ item.text }}</span>
              <input v-model="item.selected" :value="item.value" type="checkbox" class="checkbox" />
            </label>
          </div>
          
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-9 col-span-12 lg:col-span-10"
      >
        <ProductCard
          v-for="(productsingle, index) in filterItems"
          :key="index"
          :brand="productsingle.brand"
          :product="productsingle.product"
          :category="productsingle.category"
          :productType="productsingle.productType"
          :selectedVariant="productsingle.selectedVariant"
          :variants="productsingle.variants"
          @button-clicked="addToCart"
        />
      </div>
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
    addToCart(e) {
      this.$emit("update-cart", e);
    },
  },
  computed: {
    filterItems() {
      var productTypeItems = this.Productitems;
      this.Filtering.checkboxProductType.forEach(option => {
        if (option.selected) {
          productTypeItems = Object.values(productTypeItems).filter(item => item.productType.includes(option.value))
        }
      })
      return productTypeItems;      
    }
  },
  data() {
    return {
      Filtering: {
        checkboxProductType: [
          { text: 'test filter', value: 'test', selected: false },
          { text: 'socks', value: 'socks', selected: false },
          { text: 'hat', value: 'hat', selected: false }
        ]
      },
      Productitems: {
        productone: {
          brand: "Vue",
          product: "Socks",
          productType: ["test", "socks"],
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
              variantQuantity: 1,
            },
          ],
        },
        producttwo: {
          brand: "Vue",
          product: "Smocks",
          productType: ["socks"],
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
          ],
        },
        productThree: {
          brand: "Thomas",
          product: "Hat",
          productType: ["test", "hat"],
          selectedVariant: 0,
          variants: [
            {
              variantId: 2145,
              variantColor: "Blue",
              variantImage: require("../images/hat-blue.jpg"),
              variantSale: false,
              variantQuantity: 0,
            },
            {
              variantId: 6421,
              variantColor: "Pink",
              variantImage: require("../images/hat-pink.png"),
              variantSale: true,
              variantQuantity: 99,
            },
          ],
        },
      },
    };
  },
};
</script>