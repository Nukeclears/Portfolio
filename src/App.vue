<template>
  <div class="min-h-[100vh] rounded-lg shadow bg-base-200 drawer h-52">
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <DrawerMenu />
    <div class="flex flex-col drawer-content h-full bg-base-100">
      <MenuContent :cart="total"/>
      <div class="flex-1">
        <router-view @update-cart="updateCart()"></router-view>
      </div>
      <button></button>
      <Footer />
    </div>
  </div>
</template>

<script>
import DrawerMenu from "./components/DrawerMenu";
import MenuContent from "./components/MenuContent";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    DrawerMenu,
    MenuContent,
    Footer,
  },
  data() {
    return {
      total: 0,
    };
  },
  methods: {
      updateCart() {
        this.total += 1
      },
    },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>