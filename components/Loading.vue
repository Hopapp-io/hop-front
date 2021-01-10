<template>
  <div style="text-align: center; height: 25vh">
    <div class="loading" />
    <br />
    <span class="loading-text">Cargando...</span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
.loading {
  display: flex;
  height: 10vh;
  justify-content: center;
}
.loading::after {
  border: 2px solid #76459a;
  animation: spinAround 500ms infinite linear;
  border-radius: 50%;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  width: 1em;
  position: absolute;
  width: 5em;
  height: 5em;
  border-width: 0.5em;
}
.loading-text {
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 1.5em;
}
</style>