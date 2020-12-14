<template>
  <div class="bg1">
    <div class="custom-container">
      <div class="columns">
        <div class="column">
          <div class="home">
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
                    <b-field label="Origen">
                      <b-autocomplete
                        :data="getAirportList"
                        placeholder="SCL"
                        field="name"
                        :loading="isFetching"
                        @typing="getAsyncData"
                        @select="(option) => (airportOrigin = option)"
                        open-on-focus
                        :clearable="true"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.code }} -
                              {{ props.option.location }}
                              <br />
                              <small>
                                {{ props.option.name }}
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
                        field="name"
                        :loading="isFetching"
                        @typing="getAsyncData"
                        @select="(option) => (airportTarget = option)"
                        open-on-focus
                        :clearable="true"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.code }} -
                              {{ props.option.location }}
                              <br />
                              <small>
                                {{ props.option.name }}
                              </small>
                            </div>
                          </div>
                        </template>
                      </b-autocomplete>
                    </b-field>
                    <b-field label="Fecha">
                      <b-datepicker
                        v-model="flightDate"
                        placeholder="Seleccione una date"
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
                  <div style="text-align: center">
                    <b-radio
                      class="radio-select"
                      v-for="item in flightList"
                      :key="item.id"
                      v-model="selectedFlight"
                      :native-value="item"
                      name="flightSelect"
                    >
                      <img :src="item.image" class="logo-image" alt="Logo"/>
                      <p>
                        <b-icon icon="airplane" size="is-small"> </b-icon>
                        {{ item.origin }}
                        <b-icon icon="arrow-right" size="is-small"> </b-icon>
                        {{ item.destination }}
                      </p>
                      <p>
                        <b-icon icon="calendar" size="is-small"> </b-icon>
                        {{ item.date.toLocaleDateString("en-US") }}
                      </p>
                      <p>
                        <b-icon icon="clock" size="is-small"> </b-icon> Salida:
                        {{ item.departure }}
                      </p>
                      <p>
                        <b-icon icon="clock-outline" size="is-small"> </b-icon>
                        Llegada {{ item.arrival }}
                      </p>
                    </b-radio>
                  </div>
                </b-step-item>

                <b-step-item step="3" label="Equipaje" :clickable="false">
                  <h1 class="title is-2">
                    ¿Cuántas piezas de equipaje nos entregas?
                  </h1>
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
                        Acepto los
                        <a href="/terms.pdf" class="footer-link" target="_blank"
                          >términos y condiciones</a
                        >
                        de Hop.
                      </b-checkbox>
                    </div>
                  </section>
                </b-step-item>

                <b-step-item step="4" label="Entrega" :clickable="false">
                  <h1 class="title is-2">Datos para la entrega</h1>
                  Necesitamos los datos para la entrega
                  <section>
                    <b-field label="Nombre">
                      <b-input
                        v-model="personalInfo.name"
                        @keyup.native="onStep3()"
                      ></b-input>
                    </b-field>
                    <b-field label="Apellido">
                      <b-input
                        v-model="personalInfo.surname"
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
                    >
                      <img :src="item.image" class="logo-pago" alt="Logo"/>
                    </b-radio>
                  </div>
                </b-step-item>

                <b-step-item step="5" label="Confirmación" :clickable="false">
                  <h1 class="title is-2">¡Reserva confirmada!</h1>
                  <h2 class="title is-3">¡Gracias, {{ personalInfo.name }}!</h2>
                  <h2 class="subtitle is-3">
                    Asegúrate de tener tu equipaje listo a la hora acordada.
                  </h2>
                  <br />
                  <h2 class="title is-4">Datos de la reserva</h2>
                  <h3 class="subtitle">
                    Aerolínea: LATAM
                    <img :src="selectedFlight.image" class="airline" alt="Logo"/>
                  </h3>
                  <h3 class="subtitle">Piezas de equipaje: {{ luggage }}</h3>
                  <p class="subtitle">Origen: {{ selectedFlight.origin }}</p>
                  <p class="subtitle">
                    Destino: {{ selectedFlight.destination }}
                  </p>
                  <p class="subtitle">
                    Fecha:
                    {{ selectedFlight.date.toLocaleDateString("en-US") }}
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
import latamLogo from "~/static/images/reservation/latam-logo.png";
import payPalLogo from "~/static/images/reservation/paypal-logo.png";
import webPayLogo from "~/static/images/reservation/webpay-logo.png";

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
          code: "SCL",
          location: "Santiago de Chile",
          name: "Aeropuerto Internacional Arturo Merino Benítez",
        },
        {
          id: 2,
          code: "DXB",
          location: "Dubái",
          name: "Aeropuerto Internacional de Dubái",
        },
        {
          id: 3,
          code: "PEK",
          location: "Pekín",
          name: "Aeropuerto Internacional de Pekín",
        },
        {
          id: 4,
          code: "MIA",
          location: "Miami",
          name: "Aeropuerto Internacional de Miami",
        },
        {
          id: 5,
          code: "MUC",
          location: "Múnich",
          name: "Aeropuerto de Múnich",
        },
        {
          id: 6,
          code: "LAX",
          location: "Los Ángeles",
          name: "Aeropuerto Internacional de Los Ángeles",
        },
      ],
      flightList: [
        {
          id: 1,
          origin: "SCL",
          destination: "MIA",
          date: new Date(),
          departure: "03:30",
          arrival: "05:45",
          image: latamLogo,
        },
        {
          id: 2,
          origin: "SCL",
          destination: "MIA",
          date: new Date(),
          departure: "10:30",
          arrival: "13:25",
          image: latamLogo,
        },
        {
          id: 3,
          origin: "SCL",
          destination: "MIA",
          date: new Date(),
          departure: "15:40",
          arrival: "17:25",
          image: latamLogo,
        },
        {
          id: 4,
          origin: "SCL",
          destination: "MIA",
          date: new Date(),
          departure: "20:40",
          arrival: "23:25",
          image: latamLogo,
        },
      ],
      flightDate: new Date(),
      airportOrigin: {},
      airportTarget: {},
      data: [],
      selectedFlight: {
        date: new Date(),
      },
      isFetching: false,
      luggage: 1,
      timeList: ["07:55 - 10:55", "08:05 - 11:10"],
      time: null,
      terms: false,
      forbiddenObjects: false,
      personalInfo: {
        name: null,
        surname: null,
        email: null,
        address1: null,
        address2: null,
      },
      paymentOptions: [
        {
          id: 1,
          name: "PayPal",
          image: payPalLogo,
        },
        {
          id: 2,
          name: "WebPay",
          image: webPayLogo,
        },
      ],
      paymentMethod: {},
    };
  },
  computed: {
    // filteredAirportList() {
    //   return (this.airportList || []).filter((option) => {
    //     return (
    //       option.name
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
    paymentMethod: function () {
      this.onStep3();
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
      if (Object.keys(this.paymentMethod).length > 0) {
        console.log("true", Object.keys(this.paymentMethod).length);
        var info = this.personalInfo;
        this.nextDisabled =
          info.name &&
          info.surname &&
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
.logo-image {
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
.b-steps .steps .step-items .step-item .step-link:not(.is-clickable) {
  cursor: unset;
}
@media only screen and (max-width: 1024px) {
  /* .radio-select {
    max-width: 100%;
  } */
}
</style>