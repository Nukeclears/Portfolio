<template>
  <div class="container px-5 md:px-0">
    <div class="grid grid-cols-12 lg:gap-x-10 gap-y-10 py-10">
      <div class="col-span-12 lg:col-span-2">
        <div class="flex flex-col">
          <ul class="menu mb-2">
            <li>
              <h2 class="text-xl mb-4">Filters</h2>
            </li>
            <li v-for="item in Filtering.checkboxProductType" :key="item.value">
              <label class="cursor-pointer label">
                <span class="label-text text-lg">{{ item.text }}</span>
                <input
                  v-model="item.selected"
                  :value="item.value"
                  type="checkbox"
                  class="checkbox"
                />
              </label>
            </li>
          </ul>
          <div class="p-6 card bordered">
            <div class="form-control">
              <label class="cursor-pointer label">  
                <span class="label-text">Inclusive</span>
                <input
                  type="checkbox"
                  v-model="InclusiveFilter.FilterEnable"
                  class="toggle"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-10 col-span-12 lg:col-span-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <ProductCard
            v-for="(productsingle, index) in filterItems"
            :key="index"
            :brand="productsingle.brand"
            :product="productsingle.product"
            :category="productsingle.category"
            :productType="productsingle.productType"
            :variants="productsingle.variants"
            @button-clicked="addToCart"
          />
        </div>
        <div>
          <div class="btn-group">
            <button class="btn">Previous</button>
            <button class="btn btn-active">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
            <button class="btn">Next</button>
          </div>
        </div>
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
      if (this.InclusiveFilter.FilterEnable) {
        var Filters = [];
        var productList = [];
        this.Filtering.checkboxProductType.forEach((option) => {
          if (option.selected) {
            Filters.push(option.value);
          }
        });
        if (Filters == false) {
          return this.Productitems;
        } else {
          this.Productitems.forEach((product) => {
            var myproduct = product.productType.some((e) =>
              Filters.includes(e)
            );
            if (myproduct) {
              productList.push(product);
            }
          });

          return productList;
        }
      } else {
        var productTypeItems = this.Productitems;
        this.Filtering.checkboxProductType.forEach((option) => {
          if (option.selected) {
            productTypeItems = Object.values(productTypeItems).filter((item) =>
              item.productType.includes(option.value)
            );
          }
        });
        return productTypeItems;
      }
    },
    Pagination() {

    }
  },
  data() {
    return {
      InclusiveFilter: {
        FilterEnable: false,
      },
      Filtering: {
        checkboxProductType: [
          { text: "Vue", value: "Vue", selected: false },
          { text: "Thomas", value: "Thomas", selected: false },
          { text: "Smeckel", value: "Smeckel", selected: false },
          { text: "socks", value: "socks", selected: false },
          { text: "hat", value: "hat", selected: false },
        ],
      },
      Productitems: [
        {
          brand: "Vue",
          product: "test",
          productType: ["Vue", "socks"],
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
        {
          brand: "Vue",
          product: "Smocks",
          productType: ["Vue", "socks"],
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
        {
          brand: "Thomas",
          product: "Hat",
          productType: ["Thomas", "hat"],
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
        {
          brand: "Smeckel",
          product: "Deluxe hat",
          productType: ["Smeckel", "hat"],
          variants: [
            {
              variantId: 6421,
              variantColor: "Pink",
              variantImage: require("../images/hat-pink.png"),
              variantSale: true,
              variantQuantity: 99,
            },
            {
              variantId: 2145,
              variantColor: "Blue",
              variantImage: require("../images/hat-blue.jpg"),
              variantSale: false,
              variantQuantity: 3,
            },
            
          ],
        },
      ],
    };
  },
};
</script>