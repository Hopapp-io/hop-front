<template>
  <div>
    <div class="bg1" id="hop">
      <div class="custom-container">
        <div class="columns">
          <div class="column is-three-fifths">
            <div class="home">
              <div>
                <h1 class="headline">
                  <span class="bold">Hop!</span> Olvida las maletas
                </h1>
                <p class="text">
                  Recogemos tu equipaje en la puerta de tu casa y lo ponemos en el avión
                  por ti.
                </p>
                <p class="subheading">Desde $15.000 CLP.</p>
                <div class="buttons">
                  <nuxt-link to="/reservation"
                    ><b-button
                      type="is-primary is-light"
                      style="font-size: 1rem; font-weight: bolder; color: #76459a"
                      >Reserva ahora</b-button
                    ></nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="home">
              <div class="custom-content non-clickable">
                <img
                  :src="require('~/static/images/index/Hop_Maleta.svg')"
                  class="main-image"
                  alt="Hop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg2" id="servicio">
      <div class="custom-container">
        <h1 class="headline2">Nuestro servicio</h1>
        <div class="columns">
          <div class="column">
            <div class="card home">
              <div class="card-content" style="width: 100%">
                <div class="columns" style="text-align: center; align-items: center">
                  <div class="column is-one-third non-clickable">
                    <img
                      :src="require('~/static/images/index/Seguridad.svg')"
                      width="115px"
                      style="min-width: 115px"
                      alt="Seguridad"
                    />
                  </div>
                  <div class="column">
                    <p class="subheading2">Seguridad garantizada</p>
                    <p class="text2">
                      Recogemos tu equipaje en la puerta de tu casa y lo ponemos en el
                      avión por ti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card home">
              <div class="card-content" style="width: 100%">
                <div class="columns" style="text-align: center; align-items: center">
                  <div class="column is-one-third non-clickable">
                    <img
                      :src="require('~/static/images/index/Carro.svg')"
                      width="115px"
                      style="min-width: 115px"
                      alt="Carro"
                    />
                  </div>
                  <div class="column">
                    <p class="subheading2">No cargues con equipajes pesados</p>
                    <p class="text2">Despreocúpate de tus maletas y viaja cómodo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card home">
              <div class="card-content" style="width: 100%">
                <div class="columns" style="text-align: center; align-items: center">
                  <div class="column is-one-third non-clickable">
                    <img
                      :src="require('~/static/images/index/Casa.svg')"
                      width="115px"
                      style="min-width: 115px"
                      alt="Casa"
                    />
                  </div>
                  <div class="column">
                    <p class="subheading2">De la puerta de tu casa a tu destino!</p>
                    <p class="text2">
                      ¡Recogemos tus maletas en la puerta de tu casa y estarán en la cinta
                      de equipaje de tu destino!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card home">
              <div class="card-content" style="width: 100%">
                <div class="columns" style="text-align: center; align-items: center">
                  <div class="column is-one-third non-clickable">
                    <img
                      :src="require('~/static/images/index/Reloj.svg')"
                      width="115px"
                      style="min-width: 115px"
                      alt="Reloj"
                    />
                  </div>
                  <div class="column">
                    <p class="subheading2">Optimiza tu tiempo</p>
                    <p class="text2">
                      Ahórrate las interminables filas en el aeropuerto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card home">
              <div class="card-content" style="width: 100%">
                <div class="columns" style="text-align: center; align-items: center">
                  <div class="column is-one-third non-clickable">
                    <img
                      :src="require('~/static/images/index/Cuenta.svg')"
                      width="115px"
                      style="min-width: 115px"
                      alt="Cuenta"
                    />
                  </div>
                  <div class="column">
                    <p class="subheading2" style="font-weight: 300">¿Y cuánto cuesta?</p>
                    <p class="subheading2">Depende de la cantidad de maletas</p>
                    x<p class="text2">
                      - Si llevas sólo una maleta el precio será de $15.000
                    </p>
                    <p class="text2">
                      - Por cada maleta adicional, te cobraremos $5.000 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg4">
      <div class="custom-container">
        <div class="columns">
          <div class="column">
            <div class="home">
              <div class="card" style="width: 100%">
                <div class="card-content" style="width: 100%; background-color: #ffffff">
                  <div class="columns" style="text-align: center; align-items: center">
                    <div class="column is-one-third non-clickable">
                      <img
                        :src="require('~/static/images/index/Persona1.png')"
                        width="auto"
                        style="min-width: 115px"
                        alt="Persona"
                      />
                    </div>
                    <div class="column">
                      <p class="subheading2" style="font-weight: 300; line-height: 2">
                        "Hop me permite viajar sin preocuparme de las largas esperas en
                        los aeropuertos y ocupar mi tiempo en las cosas realmente
                        importantes."
                      </p>
                      <p class="text2" style="text-align: right">— Jane Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg3" id="como">
      <div class="custom-container">
        <h1 class="headline2" style="color: #ffffff">Cómo funciona</h1>
        <div class="columns">
          <div class="column">
            <div class="home">
              <div class="columns" style="width: 100%; justify-content: center">
                <div
                  class="column is-three-quarters"
                  style="display: flex; justify-content: center"
                >
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "~/components/Timeline";

export default {
  transition: "transition",
  components: {
    Timeline,
  },
};
</script>
