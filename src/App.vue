<template>
  <div id="app">
    <n-navbar />
    <router-view />
    <n-footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NNavbar: Navbar,
    NFooter: Footer,
  },
};
</script>

<style>
#app {
  background-color: #000000;
  font-family: futura-pt, sans-serif;
  font-weight: 700;
  font-style: normal;
  background-image: url("./assets/Background.png");
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
}
html {
  overflow-x: hidden;
}
</style>
