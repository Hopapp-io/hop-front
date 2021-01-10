<template>
  <div style="overflow: hidden">
    <div class="columns footer">
      <div class="column is-one-quarter">
        <img
          :src="require('~/static/images/Logo_Hop.png')"
          class="footer-logo"
          alt="Hop"
        />
      </div>
      <div class="column is-half">
        <div class="footer-element">
          <div class="columns" style="width: 100%">
            <div class="column" style="text-align: right">
              <nuxt-link to="/privacy" class="footer-link"
                >Política de privacidad</nuxt-link
              >
            </div>
            <div class="column" style="text-align: right">
              <nuxt-link to="/contact" class="footer-link"
                >Contáctanos</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="footer-element">
          <a class="footer-link" href="https://www.linkedin.com/company/hop-io/" target="_blank"><b-icon icon="linkedin"> </b-icon></a>
          <a class="footer-link"><b-icon icon="twitter"> </b-icon></a>
          <a class="footer-link"><b-icon icon="rss"> </b-icon></a>
        </div>
      </div>
    </div>
    <div class="footer-element">© 2020 Hop</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background-color: #ffffff;
  margin: 0 !important;
  padding: 0 !important;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, #ffffff, #909090, #ffffff);
  border-image-slice: 1;
}
.footer-logo {
  width: auto;
  min-width: 100px;
  margin: 1rem 0 1rem 1rem;
}

.footer-element {
  background-color: #ffffff;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 1rem;
}

.footer-link {
  transition-duration: 1s;
}
</style>