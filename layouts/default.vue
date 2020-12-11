<template>
  <div>
    <Navbar />
    <nuxt style="height: 100%" />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8965853.js"></script>
<!-- End of HubSpot Embed Code -->

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
@import "~/static/styles/style.css";
@import "~bulma/sass/utilities/_all";
$primary: #76459a;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
  "twitter": (
    $twitter,
    $twitter-invert,
  ),
);
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$card-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
$card-media-margin: 4rem;
$card-background-color: #f5f5f5;
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
<style lang="scss">
@import "~/static/styles/style.css";
@import "~bulma/sass/utilities/_all";
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
);
@import "~bulma-timeline";
</style>