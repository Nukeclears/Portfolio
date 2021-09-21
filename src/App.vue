<template>
  <div class="min-h-[100vh] rounded-lg shadow bg-base-200 drawer h-52">
    <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
    <DrawerMenu />
    <div class="flex flex-col drawer-content h-full bg-base-100">
      <MenuContent :cart="total"/>
      <div class="flex-1">
        <router-view @update-cart="updateCart" @clear-cart="clearCart" :cart="cart"></router-view>
      </div>
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
      cart: [],
      total: 0,
    };
  },
  methods: {
      updateCart(e) {
        this.cart.push(e);
        this.total += 1
      },
      clearCart() {
        this.total = 0,
        this.cart = []
      }
    },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>