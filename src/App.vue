<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style lang="scss" src="@/assets/css/App.scss"></style>
