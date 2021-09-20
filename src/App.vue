<template>
  <div class="min-h-[100vh] rounded-lg shadow bg-base-200 drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <DrawerMenu />
    <div class="flex flex-col drawer-content h-full bg-base-100">
      <MenuContent />
      <div class="flex-1">
        <router-view></router-view>
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
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>