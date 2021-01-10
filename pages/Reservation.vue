<template>
  <div class="bg1">
    <div class="custom-container">
      <div class="columns">
        <div class="column">
          <div class="home">
            <div class="card" style="width: 100%; padding: 1%">
              <b-steps
                v-model="activeStep"
                :animated="true"
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
                        v-model="selectedOrigin"
                        :data="departureAirportList"
                        placeholder="SCL"
                        field="fs"
                        @select="(option) => selectOrigin(option)"
                        :clearable="true"
                        :loading="loadingDeparture"
                        :disabled="loadingDeparture"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.fs }} - {{ props.option.city }},
                              {{ props.option.countryName }}
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
                        v-model="selectedTarget"
                        :data="arrivalAirportList"
                        placeholder="MIA"
                        field="fs"
                        @select="(option) => selectTarget(option)"
                        :clearable="true"
                        :loading="loadingArrival"
                        :disabled="loadingArrival"
                      >
                        <template slot-scope="props">
                          <div class="media">
                            <div class="media-content">
                              {{ props.option.fs }} - {{ props.option.city }},
                              {{ props.option.countryName }}
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
                  <Loading v-if="loadingFlights" />
                  <!-- <div v-if="loadingFlights" style="display: inline-block">
                    <div class="loading-icon"> </div>
                  </div> -->
                  <div
                    class="alert"
                    v-if="!loadingFlights && flightList.length == 0"
                  >
                    ¡Vaya! Parece que ningún vuelo concide con tu búsqueda.
                    <br />
                    <nuxt-link to="/reservation" @click.native="reloadPage"
                      >Nueva búsqueda</nuxt-link
                    ><br />
                    <nuxt-link to="/">Volver al inicio</nuxt-link>
                  </div>
                  <div v-else-if="!loadingFlights" style="text-align: center">
                    <b-radio
                      class="radio-select"
                      v-for="item in flightList"
                      :key="item.id"
                      v-model="selectedFlight"
                      :native-value="item"
                      name="flightSelect"
                    >
                      <div style="width: 100%; text-align: center">
                        <img
                          :src="getLogo(item.carrierFsCode)"
                          class="logo-image"
                          alt="Logo"
                        />
                      </div>
                      <p>
                        <b-icon icon="airplane" size="is-small"> </b-icon>
                        {{ item.departureAirportFsCode }}
                        <b-icon icon="arrow-right" size="is-small"> </b-icon>
                        {{ item.arrivalAirportFsCode }}
                      </p>
                      <p>
                        <b-icon icon="calendar" size="is-small"> </b-icon>
                        {{
                          new Date(item.departureTime).toLocaleDateString(
                            "es-ES"
                          )
                        }}
                      </p>
                      <p>
                        <b-icon icon="clock" size="is-small"> </b-icon> Salida:
                        {{ new Date(item.departureTime).toLocaleTimeString() }}
                      </p>
                      <p>
                        <b-icon icon="clock-outline" size="is-small"> </b-icon>
                        Llegada:
                        {{ new Date(item.arrivalTime).toLocaleTimeString() }}
                      </p>
                    </b-radio>
                  </div>
                  <!-- <b-loading
                    :is-full-page="true"
                    v-model="loadingFlights"
                    :can-cancel="false"
                  ></b-loading> -->
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
                      <img :src="item.image" class="logo-pago" alt="Logo" />
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
                    Aerolínea: {{ getAirline(selectedFlight.carrierFsCode) }}
                    <img
                      :src="getLogo(selectedFlight.carrierFsCode)"
                      class="airline"
                      alt="Logo"
                    />
                  </h3>
                  <h3 class="subtitle">Piezas de equipaje: {{ luggage }}</h3>
                  <p class="subtitle">
                    Origen:
                    {{ getAirport(selectedFlight.departureAirportFsCode) }}
                  </p>
                  <p class="subtitle">
                    Destino:
                    {{ getAirport(selectedFlight.arrivalAirportFsCode) }}
                  </p>
                  <p class="subtitle">
                    Fecha:
                    {{
                      new Date(selectedFlight.departureTime).toLocaleDateString(
                        "en-US"
                      )
                    }}
                  </p>
                  <p class="subtitle">Hora de entrega: {{ time }}</p>
                </b-step-item>

                <template slot="navigation" slot-scope="{ previous, next }"
                  ><div style="display: flex; justify-content: center">
                    <b-button
                    class="margin"
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
                    class="margin"
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
import Loading from "~/components/Loading";
import logoLA from "~/static/images/reservation/latam-logo.png";
import logoAA from "~/static/images/reservation/aa-logo.png";
import logoIB from "~/static/images/reservation/iberia-logo.png";
import logoH2 from "~/static/images/reservation/sky-logo.png";
import logoJAT from "~/static/images/reservation/jetsmart-logo.png";
import payPalLogo from "~/static/images/reservation/paypal-logo.png";
import webPayLogo from "~/static/images/reservation/webpay-logo.png";
import fetchJsonp from "fetch-jsonp";

export default {
  transition: "transition",
  components: {
    Loading,
  },
  head() {
    return {
      title: "Reserva | Hop",
    };
  },
  data() {
    return {
      loadingFlights: true,
      loadingArrival: true,
      loadingDeparture: true,
      activeStep: 0,
      nextDisabled: true,
      previousDisabled: true,
      airlines: [],
      airports: [],
      departureAirports: [],
      departureAirportsAux: [],
      arrivalAirports: [],
      arrivalAirportsAux: [],
      flightList: [],
      flightDate: new Date(),
      originCounter: 3,
      targetCounter: 3,
      selectedOrigin: "",
      selectedTarget: "",
      airportOrigin: {},
      airportTarget: {},
      data: [],
      selectedFlight: {},
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
      airlinesLogo: [
        { code: "AA", image: logoAA },
        { code: "LA", image: logoLA },
        { code: "IB", image: logoIB },
        { code: "H2", image: logoH2 },
        { code: "JAT", image: logoJAT },
      ],
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
  mounted() {
    this.getAirportList();
    this.onStep0();
  },
  computed: {
    departureAirportList() {
      if (this.selectedOrigin.length >= 3) {
        var list =
          this.selectedOrigin.length == 3 ||
          this.selectOrigin.length < this.originCounter
            ? this.departureAirports
            : this.departureAirportsAux;
        this.departureAirportsAux = (list || []).filter((option) => {
          return (
            `${option.fs} ${option.city} ${option.countryName} ${option.name}`
              .toString()
              .toLowerCase()
              .indexOf(this.selectedOrigin.toLowerCase()) >= 0
          );
        });
        this.originCounter = this.selectedOrigin.length;
        return this.departureAirportsAux;
      }
    },
    arrivalAirportList() {
      if (this.selectedTarget.length >= 3) {
        var list =
          this.selectedTarget.length == 3 ||
          this.selectTarget.length < this.targetCounter
            ? this.arrivalAirports
            : this.arrivalAirportsAux;
        this.arrivalAirportsAux = (list || []).filter((option) => {
          return (
            `${option.fs} ${option.city} ${option.name}`
              .toString()
              .toLowerCase()
              .indexOf(this.selectedTarget.toLowerCase()) >= 0
          );
        });
        this.targetCounter = this.selectedTarget.length;
        return this.arrivalAirportsAux;
      }
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
      this.nextDisabled =
        this.selectedFlight.flightNumber != null ? false : true;
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
    getLogo(carrierFsCode) {
      let carrier = this.airlinesLogo.find(
        (airline) => airline.code === carrierFsCode
      );
      if (carrier != undefined) {
        return carrier.image;
      } else {
        return null;
      }
    },
    getAirline(carrierFsCode) {
      if (this.airlines.length > 0) {
        let carrier = this.airlines.find(
          (airline) => airline.fs === carrierFsCode
        );
        return carrier != undefined ? carrier.name : null;
      }
    },
    getAirport(fsCode) {
      if (this.airports.length > 0) {
        let airport = this.airports.find((airport) => airport.fs === fsCode);
        if (airport != undefined) {
          return `${airport.city}, ${airport.countryName}, ${airport.fs}`;
        }
      }
    },
    getAirportList() {
      if (this.departureAirports.length == 0) {
        this.getAirportsCountry("CL")
          .then((res) => {
            if (res) {
              this.departureAirports = res;
              this.loadingDeparture = false;
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
      if (this.arrivalAirports.length == 0) {
        this.getActiveAirports()
          .then((res) => {
            if (res) {
              this.arrivalAirports = res;
              this.loadingArrival = false;
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    formatNumber(number) {
      var formatter = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "CLP",
      });
      return formatter.format(number);
    },
    async getFlights() {
      try {
        this.loadingFlights = true;
        let res = await fetchJsonp(
          `${this.$store.getters.getFsUrl}/flex/schedules/rest/v1/jsonp/from/${
            this.airportOrigin.fs
          }/to/${
            this.airportTarget.fs
          }/departing/${this.flightDate.getFullYear()}/${
            this.flightDate.getMonth() + 1
          }/${this.flightDate.getDate()}?appId=${
            this.$store.state.appId
          }&appKey=${this.$store.state.appKey}&extendedOptions=languageCode:es`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            return json;
          })
          .catch(function (ex) {
            return ex;
          });
        this.loadingFlights = false;
        return res;
      } catch (err) {
        this.loadingFlights = false;
        console.error("error", err);
      }
    },
    async getActiveAirports() {
      try {
        let res = await fetchJsonp(
          `${this.$store.getters.getFsUrl}/flex/airports/rest/v1/jsonp/active?appId=${this.$store.state.appId}&appKey=${this.$store.state.appKey}&extendedOptions=languageCode:es`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            return json;
          })
          .catch(function (ex) {
            return ex;
          });
        return res;
      } catch (err) {
        console.error("error", err);
      }
    },
    async getAirportsCountry(countryCode) {
      try {
        let res = await fetchJsonp(
          `${this.$store.getters.getFsUrl}/flex/airports/rest/v1/jsonp/countryCode/${countryCode}?appId=${this.$store.state.appId}&appKey=${this.$store.state.appKey}&extendedOptions=languageCode:es`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            return json;
          })
          .catch(function (ex) {
            return ex;
          });
        return res;
      } catch (err) {
        console.error("error", err);
      }
    },
    selectOrigin(option) {
      this.airportOrigin = option;
    },
    selectTarget(option) {
      this.airportTarget = option;
    },
    onStep0() {
      if (this.airportOrigin && this.airportTarget) {
        this.nextDisabled =
          this.airportOrigin != this.airportTarget &&
          Object.keys(this.airportOrigin).length > 0 &&
          Object.keys(this.airportTarget).length > 0
            ? false
            : true;
      } else {
        this.nextDisabled = true;
      }
    },
    onStep1() {
      this.getFlights()
        .then((res) => {
          if (res.appendix) {
            this.airports = res.appendix.airports;
            this.flightList = res.scheduledFlights;
            this.airlines = res.appendix.airlines;
          } else {
            this.flightList = [];
          }
        })
        .catch((e) => {
          console.log(e);
        });
      this.selectedFlight = {};
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
      if (Object.keys(this.paymentMethod).length > 0) {
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
        this.nextDisabled = true;
      }
    },
    reloadPage() {
      this.originCounter = 3;
      this.airportOrigin = {};
      this.selectedOrigin = "";
      this.targetCounter = 3;
      this.airportTarget = {};
      this.selectedTarget = "";
      this.activeStep = 0;
    },
  },
};
</script>

<style>
.button.margin {
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
  max-width: 15rem;
  max-height: 3rem;
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
.b-radio.radio .control-label {
  width: 100%;
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
.is-loading .input {
  border: solid 1px #d5d5d5;
}
.control.is-loading::after {
  -webkit-animation: spinAround 500ms infinite linear;
  animation: spinAround 500ms infinite linear;
  border: 2px solid #76459a;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}
.alert {
  background-color: #fdcd7e;
  background-color: rgba(253, 205, 126, 0.5);
  padding: 1%;
  border-radius: 0.25rem;
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 1.25rem;
}
.alert a {
  color: black;
  text-decoration: underline;
  font-size: 1rem;
}
.b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after {
    background: linear-gradient(to left, #b5b5b5 50%, #76459a 50%);
    background-size: 200% 100%;
    background-position: right bottom;
}
@media only screen and (max-width: 1024px) {
  /* .radio-select {
    max-width: 100%;
  } */
}
</style>