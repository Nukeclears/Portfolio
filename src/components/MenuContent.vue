<template>
  <div class="w-full navbar bg-base-300">
    <div class="flex-1 px-2 mx-2">
      <span> Thomas Vue playground </span>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu horizontal">
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <div v-for="route in routeCart" :key="route.path">
      <router-link :to="route.path">
        <div class="mx-5">
          <a href="#" class="indicator">
            <div class="indicator-item badge">{{ cart }}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </router-link>
    </div>

    <div class="flex-none lg:hidden">
      <label for="menu-drawer" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    cart: Number(),
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((item) => item.name != "cart");
    },
    routeCart() {
      return this.$router.options.routes.filter((item) => item.name == "cart");
    },
  },
};
</script>