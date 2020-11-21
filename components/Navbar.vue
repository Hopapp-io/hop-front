<template>
  <b-navbar fixed-top class="is-primary">
    <template slot="brand">
      <a href="/">
        <img
          :src="require('~/static/Logo_Hop_blanco 1.svg')"
          alt="Hop"
          class="logo"
        /></a>
    </template>
    <template slot="end">
      <b-navbar-item href="#">Sobre nosotros</b-navbar-item>
      <b-navbar-item href="#servicio">Nuestro servicio</b-navbar-item>
      <b-navbar-item href="#como">Cómo funciona</b-navbar-item>
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