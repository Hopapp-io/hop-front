<template>
  <div class="bg1">
    <div class="contenedor">
      <div class="columns">
        <div class="column">
          <div class="inicio">
            <div class="card" style="width: 100%; padding: 1%">
              <b-steps
                v-model="activeStep"
                :animated="isAnimated"
                :rounded="true"
                :has-navigation="true"
                label-position="bottom"
                mobile-mode="minimalist"
              >
                <b-step-item step="1" label="Vuelo" :clickable="false">
                  <h1 class="title is-2">Llena los datos de tu vuelo</h1>
                  <section>
                    <!-- <p class="content"><b>Origen:</b> {{ airportOrigin }}</p>
                    <p class="content"><b>Destino:</b> {{ airportTarget }}</p>
                    <p class="content"><b>Fecha:</b> {{ flightDate }}</p> -->
                    <b-field label="Origen">
                      <b-autocomplete
                        :data="getAirportList"
                        placeholder="SCL"
                        field="nombre"
                        :loading="isFetching"
                        @typing="getAsyncData"
                        @select="(option) => (airportOrigin = option)"
                        open-on-focus
                        :clearable="true"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.codigo }} -
                              {{ props.option.ciudad }}
                              <br />
                              <small>
                                {{ props.option.nombre }}
                              </small>
                            </div>
                          </div>
                        </template>
                      </b-autocomplete>
                    </b-field>
                    <b-field label="Destino">
                      <b-autocomplete
                        :data="getAirportList"
                        placeholder="MIA"
                        field="nombre"
                        :loading="isFetching"
                        @typing="getAsyncData"
                        @select="(option) => (airportTarget = option)"
                        open-on-focus
                        :clearable="true"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.codigo }} -
                              {{ props.option.ciudad }}
                              <br />
                              <small>
                                {{ props.option.nombre }}
                              </small>
                            </div>
                          </div>
                        </template>
                      </b-autocomplete>
                    </b-field>
                    <b-field label="Fecha">
                      <b-datepicker
                        v-model="flightDate"
                        placeholder="Seleccione una fecha"
                        icon="calendar-today"
                        locale="ES-es"
                        editable
                      >
                      </b-datepicker>
                    </b-field>
                  </section>
                </b-step-item>

                <b-step-item step="2" label="Selecciona" :clickable="false">
                  <h1 class="title is-2">Selecciona tu vuelo</h1>
                  <!-- <p class="content"><b>Vuelo:</b> {{ selectedFlight }}</p> -->
                  <div style="text-align: center">
                    <b-radio
                      class="radio-select"
                      v-for="item in flightList"
                      :key="item.id"
                      v-model="selectedFlight"
                      :native-value="item"
                      name="flightSelect"
                    >
                      <img :src="item.imagen" class="logo-imagen" />
                      <p>
                        <b-icon icon="airplane" size="is-small"> </b-icon>
                        {{ item.origen }}
                        <b-icon icon="arrow-right" size="is-small"> </b-icon>
                        {{ item.destino }}
                      </p>
                      <p>
                        <b-icon icon="calendar" size="is-small"> </b-icon>
                        {{ item.fecha.toLocaleDateString("en-US") }}
                      </p>
                      <p>
                        <b-icon icon="clock" size="is-small"> </b-icon> Salida:
                        {{ item.salida }}
                      </p>
                      <p>
                        <b-icon icon="clock-outline" size="is-small"> </b-icon>
                        Llegada {{ item.llegada }}
                      </p>
                    </b-radio>
                  </div>
                </b-step-item>

                <b-step-item step="3" label="Equipaje" :clickable="false">
                  <h1 class="title is-2">
                    ¿Cuántas piezas de equipaje nos entregas?
                  </h1>
                  <!-- <p class="content"><b>N° equipaje:</b> {{ luggage }}</p>
                  <p class="content"><b>Hora de entrega:</b> {{ time }}</p> -->
                  <section>
                    <b-field label="Piezas de equipaje">
                      <b-numberinput
                        controls-rounded
                        controls-position="compact"
                        min="1"
                        v-model="luggage"
                      >
                      </b-numberinput>
                    </b-field>
                    <b-field label="Hora de entrega">
                      <b-radio-button
                        v-model="time"
                        v-for="item in timeList"
                        :key="item"
                        :native-value="item"
                      >
                        {{ item }}
                      </b-radio-button>
                    </b-field>
                    <div class="field">
                      <b-checkbox v-model="forbiddenObjects">
                        Mi equipaje no lleva objetos prohibidos.
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox v-model="terms">
                        Acepto los términos y condiciones.
                      </b-checkbox>
                    </div>
                  </section>
                </b-step-item>

                <b-step-item step="4" label="Entrega" :clickable="false">
                  <h1 class="title is-2">Datos para la entrega</h1>
                  Necesitamos los datos para la entrega
                  <!-- <p class="content"><b>Datos:</b> {{ personalInfo }}</p>
                    <p class="content"><b>Pago:</b> {{ paymentMethod }}</p> -->
                  <section>
                    <b-field label="Nombre">
                      <b-input
                        v-model="personalInfo.nombre"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                    <b-field label="Apellido">
                      <b-input
                        v-model="personalInfo.apellido"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                    <b-field label="Correo electrónico">
                      <b-input
                        v-model="personalInfo.email"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                  </section>

                  <h2 class="subtitle">Dirección de entrega</h2>
                  <section>
                    <b-field label="Dirección 1">
                      <b-input
                        v-model="personalInfo.address1"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                    <b-field label="Dirección 2">
                      <b-input
                        v-model="personalInfo.address2"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                  </section>

                  <h2 class="subtitle is-4">Método de pago</h2>
                  <h3 class="subtitle">
                    Total a pagar: {{ formatNumber(amount) }}
                  </h3>
                  <div style="text-align: center">
                    <b-radio
                      class="payment-select"
                      v-for="item in paymentOptions"
                      :key="item.id"
                      v-model="paymentMethod"
                      :native-value="item"
                      name="paymentSelect"
                      @keyup.native="onStep3()"
                    >
                      <img :src="item.imagen" class="logo-pago" />
                    </b-radio>
                  </div>
                </b-step-item>

                <b-step-item step="5" label="Confirmación" :clickable="false">
                  <h1 class="title is-2">¡Reserva confirmada!</h1>
                  <h2 class="title is-3">
                    ¡Gracias, {{ personalInfo.nombre }}!
                  </h2>
                  <h2 class="subtitle is-3">
                    Asegúrate de tener tu equipaje listo a la hora acordada.
                  </h2>
                  <br />
                  <h2 class="title is-4">Datos de la reserva</h2>
                  <h3 class="subtitle">
                    Aerolínea: LATAM
                    <img :src="selectedFlight.imagen" class="airline" />
                  </h3>
                  <h3 class="subtitle">Piezas de equipaje: {{ luggage }}</h3>
                  <p class="subtitle">Origen: {{ selectedFlight.origen }}</p>
                  <p class="subtitle">Destino: {{ selectedFlight.destino }}</p>
                  <p class="subtitle">
                    Fecha:
                    {{ selectedFlight.fecha.toLocaleDateString("en-US") }}
                  </p>
                  <p class="subtitle">Hora de entrega: {{ time }}</p>
                </b-step-item>

                <template
                  v-if="customNavigation"
                  slot="navigation"
                  slot-scope="{ previous, next }"
                  ><div style="display: flex; justify-content: center">
                    <b-button
                      outlined
                      type="is-primary"
                      icon-pack="mdi"
                      icon-left="chevron-left"
                      :disabled="previousDisabled"
                      @click.prevent="previous.action"
                    >
                      Anterior
                    </b-button>
                    <b-button
                      outlined
                      type="is-primary"
                      icon-pack="mdi"
                      icon-right="chevron-right"
                      :disabled="nextDisabled"
                      @click.prevent="next.action"
                    >
                      Siguiente
                    </b-button>
                  </div>
                </template>
              </b-steps>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import latamLogo from "~/static/images/booking/latam-logo.png";
import payPalLogo from "~/static/images/booking/paypal-logo.png";
import webPayLogo from "~/static/images/booking/webpay-logo.png";

export default {
  transition: "transition",
  head() {
    return {
      title: "Reserva | Hop",
    };
  },
  data() {
    return {
      activeStep: 0,

      showSocial: true,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: true,
      nextDisabled: true,
      previousDisabled: true,
      airportList: [
        {
          id: 1,
          codigo: "SCL",
          ciudad: "Santiago de Chile",
          nombre: "Aeropuerto Internacional Arturo Merino Benítez",
        },
        {
          id: 2,
          codigo: "DXB",
          ciudad: "Dubái",
          nombre: "Aeropuerto Internacional de Dubái",
        },
        {
          id: 3,
          codigo: "PEK",
          ciudad: "Pekín",
          nombre: "Aeropuerto Internacional de Pekín",
        },
        {
          id: 4,
          codigo: "MIA",
          ciudad: "Miami",
          nombre: "Aeropuerto Internacional de Miami",
        },
        {
          id: 5,
          codigo: "MUC",
          ciudad: "Múnich",
          nombre: "Aeropuerto de Múnich",
        },
        {
          id: 6,
          codigo: "LAX",
          ciudad: "Los Ángeles",
          nombre: "Aeropuerto Internacional de Los Ángeles",
        },
      ],
      flightList: [
        {
          id: 1,
          origen: "SCL",
          destino: "MIA",
          fecha: new Date(),
          salida: "03:30",
          llegada: "05:45",
          imagen: latamLogo,
        },
        {
          id: 2,
          origen: "SCL",
          destino: "MIA",
          fecha: new Date(),
          salida: "10:30",
          llegada: "13:25",
          imagen: latamLogo,
        },
        {
          id: 3,
          origen: "SCL",
          destino: "MIA",
          fecha: new Date(),
          salida: "15:40",
          llegada: "17:25",
          imagen: latamLogo,
        },
        {
          id: 4,
          origen: "SCL",
          destino: "MIA",
          fecha: new Date(),
          salida: "20:40",
          llegada: "23:25",
          imagen: latamLogo,
        },
      ],
      flightDate: new Date(),
      airportOrigin: {},
      airportTarget: {},
      data: [],
      selectedFlight: {
        fecha: new Date(),
      },
      isFetching: false,
      luggage: 1,
      timeList: ["07:55 - 10:55", "08:05 - 11:10"],
      time: null,
      terms: false,
      forbiddenObjects: false,
      personalInfo: {
        nombre: null,
        apellido: null,
        email: null,
        address1: null,
        address2: null,
      },
      paymentOptions: [
        {
          id: 1,
          nombre: "PayPal",
          imagen: payPalLogo,
        },
        {
          id: 2,
          nombre: "WebPay",
          imagen: webPayLogo,
        },
      ],
      paymentMethod: {},
    };
  },
  computed: {
    // filteredAirportList() {
    //   return (this.airportList || []).filter((option) => {
    //     return (
    //       option.nombre
    //         .toString()
    //         .toLowerCase()
    //         .indexOf(this.airportOrigin.toLowerCase()) >= 0
    //     );
    //   });
    // },
    getAirportList() {
      return this.airportList;
    },
    amount() {
      var total = 15000;
      total += (this.luggage - 1) * 5000;
      return total;
    },
  },
  watch: {
    activeStep: function () {
      switch (this.activeStep) {
        case 0:
          this.previousDisabled = true;
          this.onStep0();
          break;
        case 1:
          this.previousDisabled = false;
          this.onStep1();
          break;
        case 2:
          this.previousDisabled = false;
          this.onStep2();
          break;
        case 3:
          this.previousDisabled = false;
          this.onStep3();
          break;
        case 4:
          this.nextDisabled = true;
          this.previousDisabled = true;
          break;
      }
    },
    airportOrigin: function () {
      this.onStep0();
    },
    airportTarget: function () {
      this.onStep0();
    },
    selectedFlight: function () {
      this.onStep1();
    },
    luggage: function () {
      this.onStep2();
    },
    time: function () {
      this.onStep2();
    },
    terms: function () {
      this.onStep2();
    },
    forbiddenObjects: function () {
      this.onStep2();
    },
  },
  methods: {
    getAsyncData: debounce(function (name) {
      if (!name.length) {
        this.data = this.airportList;
      }
    }, 500),
    formatNumber(number) {
      var formatter = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "CLP",
      });
      return formatter.format(number);
    },
    onStep0() {
      if (this.airportOrigin) {
        this.nextDisabled =
          this.airportOrigin.id != this.airportTarget.id &&
          this.airportOrigin.id != null &&
          this.airportTarget.id != null
            ? false
            : true;
      } else {
        this.nextDisabled = true;
      }
    },
    onStep1() {
      this.nextDisabled = this.selectedFlight.id != null ? false : true;
    },
    onStep2() {
      this.nextDisabled =
        this.luggage > 0 &&
        this.time != null &&
        this.terms &&
        this.forbiddenObjects == true
          ? false
          : true;
    },
    onStep3() {
      console.log("onstep3");
      if (this.paymentMethod != {}) {
        console.log("true");
        var info = this.personalInfo;
        this.nextDisabled =
          info.nombre &&
          info.apellido &&
          info.email &&
          info.address1 &&
          info.address2 &&
          this.paymentMethod.id != null
            ? false
            : true;
      } else {
        console.log("false");
        this.nextDisabled = true;
      }
    },
    // onStep4() {
    //   this.nextDisabled = this.selectedFlight.id != null ? false : true;
    // },
  },
};
</script>

<style>
.button {
  margin: 0.3rem;
}
.card {
  overflow: visible !important;
}
.radio-select {
  /* margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem; */
  padding: 0.5rem;
  max-width: 16.75rem;
  background-color: rgba(118, 69, 154, 0.1);
  border-radius: 0.25rem;
}
.payment-select {
  /* margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem; */
  width: fit-content !important;
  background-color: rgba(118, 69, 154, 0.1);
  border-radius: 0.25rem;
  padding: 0.5rem;
}
.b-radio.radio.payment-select:not(.button) {
  width: fit-content !important;
}
.b-radio {
  width: 100% !important;
  margin: 0.25rem !important;
  text-align: left !important;
}
.logo-imagen {
  width: 15rem;
}
.logo-pago {
  max-width: 14rem;
  max-height: 6rem;
}
.airline {
  max-height: 1rem;
}
.control.is-clearfix {
  display: flex;
  align-items: center;
}
.b-steps .steps .step-items .step-item.is-previous .step-marker {
  border: 0.2em solid #76459a;
}
.b-steps .steps .step-items .step-item .step-marker {
  border: 0.2em solid #b5b5b5;
}
@media only screen and (max-width: 1024px) {
  /* .radio-select {
    max-width: 100%;
  } */
}
</style>
