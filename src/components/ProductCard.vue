<template>
  <div class="card lg:card-side bordered">
    <figure class="overflow-hidden">
      <div class="h-full bg-white">
        <img v-bind:src="Image" height="300" width="300" class="w-full lg:w-80 h-96 lg:h-full object-contain" />
      </div>
    </figure>
    <div class="card-body">
      <div class="card-title mb-5">
        <h2 class="text-4xl">{{ product }}</h2>
        <h3 class="text-md text-accent">{{ brand }}</h3>
      </div>

      <div class="flex gap-x-4 mb-7">
        <div v-for="item in productType" :key="item" class="badge badge-outline">
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col h-full">
        <div class="flex flex-col gap-y-6 flex-1">
          <div class="flex gap-x-4 mb-5">
            <div v-for="(variant, index) in variants" :key="variant.variantId">
              <button
                class="h-6 w-6 rounded-full border-2 border-accent"
                :style="{backgroundColor: variant.variantColor}"
                @click="updateProduct(index)"
              >
              </button>
            </div>
          </div>
        </div>
        <p v-if="onSale" class="alert alert-success">On sale!</p>
        <div class="card-actions flex-col">
          <div>
            <p v-if="inStock > 10" class="badge badge-success">In stock</p>
            <p
              v-else-if="inStock <= 10 && inStock > 0"
              class="badge badge-warning"
            >
              Almost out!
            </p>
            <p
              v-else
              class="badge badge-error"
              :class="{ 'line-through': inStock <= 0 }"
            >
              Out of stock
            </p>
          </div>
          <a>
            <button
              @click="buttonClicked()"
              :disabled="inStock <= 0"
              class="btn btn-primary"
            >
              Add to Cart
            </button>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    brand: String,
    product: String,
    productType: Array,
    selectedVariant: Number,
    variants: Array,
    index: 0,
  },
  data() {
    return {};
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    },
    buttonClicked() {
      this.$emit("button-clicked", {
        brand: this.brand,
        name: this.product,
        variant: this.variants[this.selectedVariant],
        category: this.category,
      });
    },
  },
  computed: {
    Image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].variantSale;
    },
  },
};
</script>