<template>
  <div class="drawer-side">
      <label for="menu-drawer" class="drawer-overlay" name="drawer"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    routes() {
      return this.$router.options.routes.filter((item) => item.name != "cart");
    },
  },
};
</script>