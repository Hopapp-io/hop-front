<template>
  <div style="overflow: hidden">
    <div class="columns footer g" style="background-color: #ffffff; margin: 0; padding: 0; border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, #ffffff, #909090, #ffffff);
  border-image-slice: 1;">
      <div class="column is-one-quarter">
        <img :src="require('~/static/Logo_Hop.png')" class="logo-footer" />
      </div>
      <div class="column is-half">
        <div class="elemento-footer">
          <div class="columns" style="width: 100%">
            <div class="column" style="text-align: right">
              <a class="link-footer">Política de privacidad</a>
            </div>
            <div class="column" style="text-align: right">
              <a class="link-footer">Contáctanos</a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="elemento-footer">
          <a class="link-footer"><b-icon icon="linkedin"> </b-icon></a>
          <a class="link-footer"><b-icon icon="twitter"> </b-icon></a>
          <a class="link-footer"><b-icon icon="rss"> </b-icon></a>
        </div>
      </div>
    </div>
    <div class="elemento-footer">
        © 2020 Hop
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.logo-footer {
  width: auto;
  min-width: 100px;
  margin: 1rem 0 1rem 1rem;
}

.elemento-footer {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 1rem;
}

.link-footer {
  transition-duration: 1s;
}
</style>