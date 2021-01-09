<template>
  <b-navbar fixed-top class="is-primary">
    <template slot="brand">
      <nuxt-link to="/#">
        <div class="non-clickable">
          <img
            :src="require('~/static/images/Logo_Hop_blanco 1.svg')"
            alt="Hop"
            class="logo"
          /></div
      ></nuxt-link>
    </template>
    <template slot="end">
      <nuxt-link to="/#" class="navbar-item">Sobre nosotros</nuxt-link>
      <nuxt-link to="/#servicio" class="navbar-item"
        >Nuestro servicio</nuxt-link
      >
      <nuxt-link to="/#como" class="navbar-item">Cómo funciona</nuxt-link>
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
</style>
