<template>
  <div>
    <div class="bg1">
      <div class="contenedor">
        <div class="columns">
          <div class="column is-three-fifths">
            <div class="inicio">
              <div>
                <h1 class="encabezado">
                  <span class="bold">Hop!</span> Olvida las maletas
                </h1>
                <p class="texto">
                  Recogemos tu equipaje en la puerta de tu casa y lo ponemos en
                  el avión por ti.
                </p>
                <p class="subtitulo">Desde $15.000 CLP.</p>
                <div class="buttons">
                  <b-button
                    type="is-primary is-light"
                    style="font-size: 1rem; font-weight: bolder; color: #76459a"
                    >Reserva ahora</b-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div align="left" class="column">
            <div class="inicio">
              <div class="contenido">
                <img
                  :src="require('~/static/Hop_Maleta.svg')"
                  class="imagen-principal"
                  alt="Hop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg2" id="servicio">
      <div class="contenedor">
        <h1 class="encabezado2">Nuestro servicio</h1>
        <div class="columns">
          <div class="column">
            <div class="card inicio">
              <div class="card-content" style="width: 100%">
                <div
                  class="columns"
                  style="text-align: center; align-items: center"
                >
                  <div class="column is-one-third">
                    <img
                      :src="require('~/static/Seguridad.svg')"
                      width="115px"
                      style="min-width: 115px"
                    />
                  </div>
                  <div class="column">
                    <p class="subtitulo2">Seguridad garantizada</p>
                    <p class="texto2">
                      Recogemos tu equipaje en la puerta de tu casa y lo ponemos
                      en el avión por ti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card inicio">
              <div class="card-content" style="width: 100%">
                <div
                  class="columns"
                  style="text-align: center; align-items: center"
                >
                  <div class="column is-one-third">
                    <img
                      :src="require('~/static/Carro.svg')"
                      width="115px"
                      style="min-width: 115px"
                    />
                  </div>
                  <div class="column">
                    <p class="subtitulo2">No cargues con equipajes pesados</p>
                    <p class="texto2">
                      Despreocúpate de tus maletas y viaja cómodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card inicio">
              <div class="card-content" style="width: 100%">
                <div
                  class="columns"
                  style="text-align: center; align-items: center"
                >
                  <div class="column is-one-third">
                    <img
                      :src="require('~/static/Casa.svg')"
                      width="115px"
                      style="min-width: 115px"
                    />
                  </div>
                  <div class="column">
                    <p class="subtitulo2">
                      De la puerta de tu casa a tu destino!
                    </p>
                    <p class="texto2">
                      ¡Recogemos tus maletas en la puerta de tu casa y estarán
                      en la cinta de equipaje de tu destino!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card inicio">
              <div class="card-content" style="width: 100%">
                <div
                  class="columns"
                  style="text-align: center; align-items: center"
                >
                  <div class="column is-one-third">
                    <img
                      :src="require('~/static/Reloj.svg')"
                      width="115px"
                      style="min-width: 115px"
                    />
                  </div>
                  <div class="column">
                    <p class="subtitulo2">Optimiza tu tiempo</p>
                    <p class="texto2">
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
            <div class="card inicio">
              <div class="card-content" style="width: 100%">
                <div
                  class="columns"
                  style="text-align: center; align-items: center"
                >
                  <div class="column is-one-third">
                    <img
                      :src="require('~/static/Cuenta.svg')"
                      width="115px"
                      style="min-width: 115px"
                    />
                  </div>
                  <div class="column">
                    <p class="subtitulo2" style="font-weight: 300">
                      ¿Y cuánto cuesta?
                    </p>
                    <p class="subtitulo2">Depende de la cantidad de maletas</p>
                    <p class="texto2">
                      - Si llevas sólo una maleta el precio será de $15.000
                    </p>
                    <p class="texto2">
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
      <div class="contenedor">
        <div class="columns">
          <div class="column">
            <div class="inicio">
              <div class="card" style="width: 100%">
                <div
                  class="card-content"
                  style="width: 100%; background-color: #ffffff"
                >
                  <div
                    class="columns"
                    style="text-align: center; align-items: center"
                  >
                    <div class="column is-one-third">
                      <img
                        :src="require('~/static/Persona1.png')"
                        width="auto"
                        style="min-width: 115px"
                      />
                    </div>
                    <div class="column">
                      <p
                        class="subtitulo2"
                        style="font-weight: 300; line-height: 2"
                      >
                        "Hop me permite viajar sin preocuparme de las largas
                        esperas en los aeropuertos y ocupar mi tiempo en las
                        cosas realmente importantes."
                      </p>
                      <p class="texto2" style="text-align: right">— Jane Doe</p>
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
      <div class="contenedor">
        <h1 class="encabezado2" style="color: #ffffff">Cómo funciona</h1>
        <div class="columns">
          <div class="column">
            <div class="inicio">
              <div class="columns" style="width: 100%; justify-content: center;">
                <div class="column is-three-quarters" style="display: flex; justify-content: center;">
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
  components: {
    Timeline,
  },
};
</script>