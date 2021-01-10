<template>
  <b-navbar fixed-top close-on-click class="is-primary">
    <template slot="brand">
      <nuxt-link to="/">
        <div class="non-clickable">
          <img
            :src="require('~/static/images/Logo_Hop_blanco 1.svg')"
            alt="Hop"
            class="logo"
          /></div
      ></nuxt-link>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/#hop"> Sobre nosotros </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#servicio"> Nuestro servicio </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#como"> Cómo funciona </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
a.navbar-item {
  background-color: #76459a !important;
}
a.navbar-item:hover {
  background: linear-gradient(60deg, #ffffff, #fdcd7e);
  background-size: 1000% 1000%;
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: nav 2s ease infinite;
  -moz-animation: nav 2s ease infinite;
  animation: nav 2s ease infinite;
}
@keyframes nav {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
