<template>
  <div>
    <div class="bg1">
      <div class="custom-container">
        <div class="columns">
          <div class="column is-half">
            <div class="home">
              <div>
                <h1 class="headline">
                  <span class="bold">Contáctanos</span>
                </h1>
                <div>
                  <label class="hop-form-label" for="name">Nombre *</label>
                  <input
                    class="hop-form"
                    type="text"
                    id="name"
                    placeholder="Nombre y apellidos"
                    v-model="form.name"
                  />
                  <label class="hop-form-label" for="email"
                    >Correo electrónico *</label
                  >
                  <input
                    class="hop-form"
                    type="text"
                    id="email"
                    placeholder="correo@ejemplo.cl"
                    v-model="form.email"
                  />
                  <label class="hop-form-label" for="message">Mensaje *</label>
                  <div class="textarea_wrapper">
                    <textarea
                      class="hop-form area"
                      id="message"
                      rows="4"
                      placeholder="Escribe aquí tu mensaje"
                      v-model="form.message"
                    ></textarea>
                  </div>
                  <b-button
                    type="is-primary is-light"
                    style="
                      font-size: 1rem;
                      font-weight: bolder;
                      color: #76459a;
                      width: 100%;
                      margin: 0;
                    "
                    @click="sendForm"
                    >Enviar</b-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div align="left" class="column">
            <div class="home">
              <div style="margin-top: 3.5rem;">
                <p class="contact-text">
                  Si eres cliente, y necesitas ayuda sobre cómo reservar nuestro
                  servicio, o bien, realizar cambios o cancelaciones de reserva,
                  escríbenos a nuestro chat en línea y/o a <span class="bold">SOS@hopapp.io</span>
                </p>
                <p class="contact-text">
                  Si eres una aerolínea o agencia de viaje y te interesa
                  trabajar con nosotros, ponte en contacto con
                  <span class="bold">contacto@hopapp.io</span>
                </p>
                <p class="contact-text">
                  Nos abrimos a toda gama de talentos, desde las relaciones
                  públicas hasta la sociología, desde el periodismo hasta la
                  ingeniería. Si estás interesado en trabajar con nosotros, no
                  dudes en adjuntar tú CV y escríbenos a <span class="bold">apply@hopapp.io</span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "transition",
  head() {
    return {
      title: "Contacto | Hop",
    };
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    sendForm() {
      console.log("formulario", this.form);
      this.form = {
        name: null,
        email: null,
        message: null,
      };
    },
  },
};
</script>
<style>
.hop-form {
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.hop-form:focus {
  outline-width: 0;
}
.hop-form.area {
  height: auto;
  min-height: 3rem;
  resize: vertical;
}
.textarea_wrapper {
  position: relative;
}
.textarea_wrapper::after {
  pointer-events: none;
  content: "";
  font-size: 14px;
  position: absolute;
  height: 20px;
  width: 20px;
  text-align: center;
  bottom: 22px;
  right: 0;
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-top: 14px solid transparent;
  border-right: 14px solid white;
}
.hop-form-label {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 0.115em;
}
input.hop-form::placeholder {
  color: rgba(255, 255, 255, 0.25);
  font-family: "Work Sans", sans-serif;
  font-weight: 200;
}
textarea.hop-form::placeholder {
  color: rgba(255, 255, 255, 0.25);
  font-family: "Work Sans", sans-serif;
  font-weight: 200;
}
.contact-text {
  font-family: "Work Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  margin: 1rem 0 1rem 1.5rem;  
  color: #ffffff;
}
</style>