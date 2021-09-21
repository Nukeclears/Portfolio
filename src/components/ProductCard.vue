<template>
  <div class="card lg:card-side bordered">
    <figure class="overflow-hidden">
      <img v-bind:src="Image" class="w-48 max-h-96 object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-4xl mb-5">{{ title }}</h2>
      <div class="flex flex-col h-full">
        <div class="flex flex-col gap-y-6 flex-1">
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
          <div class="flex gap-x-4 mb-5">
            <div v-for="(variant, index) in variants" :key="variant.variantId">
              <div
                class="h-6 w-6 rounded-full border border-white"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)"
              ></div>
            </div>
          </div>
        </div>
        <p v-if="onSale" class="alert alert-success">On sale!</p>
        <div class="card-actions">
          <a>
            <button
              @click="buttonClicked"
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
    selectedVariant: Number,
    variants: Array,
    index: 0,
  },
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " - " + this.product;
    },
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