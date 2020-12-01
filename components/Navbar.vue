<template>
  <b-navbar fixed-top class="is-primary">
    <template slot="brand">
      <nuxt-link to="/#">
        <img
          :src="require('~/static/Logo_Hop_blanco 1.svg')"
          alt="Hop"
          class="logo"
      /></nuxt-link>
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
.nuxt-link-active {
  background-color: #76459a !important;
}
</style>