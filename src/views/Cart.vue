<template>
  <div>
    <div class="hero h-64 bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">cart</h1>
          <p class="mb-5">Fantastic Cart</p>
        </div>
      </div>
    </div>
    <ul class="w-full steps pt-10">
      <li class="step step-primary">Cart</li>
      <li class="step">Shipping</li>
      <li class="step">Payment</li>
      <li class="step">Finished</li>
    </ul>
    <div class="container py-10 flex flex-col gap-y-10">
      <div v-if="cart.length !== 0" class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.product">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img
                        v-bind:src="item.variant.variantImage"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ item.name }}</div>
                    <div class="text-sm opacity-50">{{ item.brand }}</div>
                  </div>
                </div>
              </td>
              <td>{{ item.variant.variantColor }}</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-else class="alert alert-error my-16 text-xl">no items!</div>
      <div class="flex justify-between">
        <button
          v-if="cart.length !== 0"
          @click="clearCart()"
          class="btn btn-error"
        >
          clear
        </button>
        <button
          v-if="cart.length !== 0"
          class="btn btn-success"
        >
          Continue
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    cart: Array,
  },
  methods: {
    clearCart() {
      this.$emit("clear-cart");
    },
  },
};
</script>