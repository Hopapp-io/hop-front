
<template>
  <div class="person-card">
    <div class="column is-12 non-clickable" style="display: flex; justify-content: center">
      <img style="border-radius: 50%; width: 160px" :src="person.image" />
    </div>
    <div class="column is-12 has-text-weight-bold is-paddingless">
      <p class="person-card-position">{{ person.position }}</p>
      <p class="person-card-name">{{ person.name }}</p>
      <p class="person-card-text">
        {{ readMoreActivated ? person.text : truncateText(person.text) }}
      </p>
      <div
        v-if="!textSize(person.text) && !readMoreActivated"
        class="read-more"
      >
        <a
          class=""
          @click="activateReadMore"
          style="text-align: center; witdh: 100%"
        >
          Leer más...
        </a>
      </div>
      <div
        v-if="!textSize(person.text) && readMoreActivated"
        style="width: 100%; text-align: center; margin-bottom: 1rem"
      >
        <a
          class=""
          @click="activateReadMore"
          style="text-align: center; witdh: 100%"
        >
          Leer menos
        </a>
      </div>
    </div>
    <div
      class="column is-12"
      style="
        display: flex;
        justify-content: space-evenly;
        margin-top: auto;
        border-image: linear-gradient(to right, #ffffff, #909090, #ffffff);
        border-image-slice: 1;
        border-top: 1px solid transparent;
      "
    >
      <a
        :href="network.url"
        class="link-footer"
        v-for="(network, i) in person.networks"
        :key="i"
        target="_blank"
        ><b-icon :icon="network.icon"> </b-icon
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: ["person"],
  data: () => ({
    readMoreActivated: false,
  }),
  methods: {
    activateReadMore() {
      this.readMoreActivated = !this.readMoreActivated;
    },
    textSize(text) {
      return text.split(" ").length <= 61;
    },
    truncateText(text) {
      return text.split(" ", 61).join(" ");
    },
  },
};
</script>

<style>
.person-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  padding: 5px;
  border-radius: 6px;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 5px;
}
.person-card-position {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.115em;
  text-align: center;
  color: #707070;
}
.person-card-name {
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  word-break: initial;
  line-height: 1;
  font-weight: 700;
  color: #444444;
}
.person-card-text {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  text-align: center;
  word-break: initial;
  line-height: 1.5;
  font-weight: 300;
  margin: 1rem 0 1rem 0;
  color: #444444;
}
.read-more {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: center;
  height: 5rem;
  margin-top: -4rem;
  /* margin-bottom: 1rem; */
  background-image: linear-gradient(
    to bottom,
    rgba(245, 245, 246, 0),
    rgba(245, 245, 246, 1),
    rgba(245, 245, 246, 1)
  );
}
</style>