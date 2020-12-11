<template>
  <div class="bg0">
    <div class="contenedor">
      <div class="inicio">
        <div style="width: 100%;">
          <h1 v-if="error.statusCode === 404" class="encabezado3">
            Página no encontrada
          </h1>
          <h1 v-else class="encabezado3">Ha ocurrido un error</h1>

          <p class="texto2" style="text-align: center !important">
            <nuxt-link to="/"
              ><b-icon
                class="icon-style link-footer"
                custom-size="mdi-128px"
                icon="emoticon-sad-outline"
              >
              </b-icon></nuxt-link
            ><br />
            <nuxt-link to="/" class="link-footer"
              >Volver a la página de inicio</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "transition",
  props: ["error"],
};
</script>

<style>
.icon-style {
  opacity: 30%;
  margin: 5%;
}
.mdi-128px {
  font-size: 128px;
}
</style>
