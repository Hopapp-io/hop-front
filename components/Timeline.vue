<template>
  <div class="timeline">
    <div class="timeline-item first">
      <div class="timeline-marker is-image is-96x96">
        <img
          :src="require('~/static/images/index/Casa2.svg')"
          width="50px"
          style="min-width: 50px"
          alt="Casa"
        />
      </div>
      <div class="timeline-content">
        <div>
          <p class="timeline-headline">Llegada</p>
          <p class="timeline-text">
            Del agente <span class="bold">Hop</span> a la puerta de tu casa
          </p>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker is-image is-96x96">
        <img
          :src="require('~/static/images/index/Documento.svg')"
          width="50px"
          style="min-width: 50px"
          alt="Archivo"
        />
      </div>
      <div class="timeline-content">
        <div>
          <p class="timeline-headline">Revisión de documentos</p>
          <p class="timeline-text">
            Verificaremos la documentación pertinente a tu viaje.
          </p>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker is-image is-96x96">
        <img
          :src="require('~/static/images/index/Seguridad2.svg')"
          width="40px"
          style="min-width: 40px"
          alt="Seguridad"
        />
      </div>
      <div class="timeline-content">
        <div>
          <p class="timeline-headline">Seguridad</p>
          <p class="timeline-text">Embalamos tu equipaje delante de ti.</p>
        </div>
      </div>
    </div>
    <div class="timeline-item last">
      <div class="timeline-marker is-image is-96x96">
        <img
          :src="require('~/static/images/index/Camara.svg')"
          width="50px"
          style="min-width: 50px"
          alt="Cámara"
        />
      </div>
      <div class="timeline-content">
        <div>
          <p class="timeline-headline">Fin del servicio Hop</p>
          <p class="timeline-text">
            Facturamos tu maleta y te enviamos una foto con las etiquetas de tu equipaje.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style>
.timeline {
  display: inline-block;
}

.timeline .timeline-item::before {
  background-color: #ffffff;
  width: 0.5rem;
  left: -0.25rem;
}

.timeline-text {
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
}

.timeline-headline {
  font-family: "Work Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
}

.timeline-content {
  padding: 1rem 0 0 5rem !important;
  height: 100%;
  align-items: center;
  display: flex;
}

.timeline-marker {
  display: flex;
  background-color: #ffffff !important;
  align-items: center;
  text-align: center;
  border: none !important;
}

.first::before {
  background-color: transparent !important;
  background-image: linear-gradient(to bottom, transparent 30%, #ffffff 30%);
}

.last::before {
  background-color: rgba(255, 0, 0, 0) !important;
  background-image: linear-gradient(to bottom, #ffffff 30%, transparent 30%);
}

.is-image {
  display: flex !important;
  justify-content: center;
}
</style>
