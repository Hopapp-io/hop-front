<template>
  <div>
    <div class="bg-about">
      <div class="about-container" style="overflow: hidden">
        <div class="columns">
          <div class="column is-7">
            <div class="about">
              <div>
                <h2 class="about-subtitle">Sobre nosotros</h2>
                <h1 class="about-title">Cómo comenzó</h1>
                <p class="about-text">
                  Todo comenzó en un viaje de amigos en pleno estallido social
                  en nuestro país (Chile). El día anterior nos dimos cuenta de
                  que íbamos a tener que viajar muy cargados e incómodos hacia
                  el aeropuerto, porque ninguno tenía auto, y no solo eso, como
                  bien sabemos en ese tiempo la antelación con que había que
                  llegar al aeropuerto era aún mayor debido a un importante
                  colapso en los aeropuertos.
                </p>
                <p class="about-text">
                  Para más remate y luego de una fila de más de una hora y media
                  para entregar nuestro equipaje terminamos perdiendo el vuelo y
                  con ello las ganas de gozar de unas merecidas vacaciones en
                  Brasil.
                </p>
                <p class="about-text">
                  Este hecho tan nefasto, nos hizo cuestionarnos y pensar… ¿Cómo
                  solucionamos esto? Hasta llegar a hacer realidad este
                  magnífico servicio que hoy conocemos como Hop.
                </p>
              </div>
            </div>
          </div>
          <div class="column bg5"></div>
        </div>
      </div>
    </div>
    <div class="bg2" style="min-height: unset">
      <div class="custom-container">
        <div class="columns">
          <div class="column">
            <div class="home">
              <div style="width: 100%">
                <div
                  style="
                    justify-content: center;
                    display: flex;
                    flex-wrap: wrap;
                  "
                >
                  <PersonCard
                    v-for="person in hopTeam"
                    :key="person.name"
                    :person="person"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg3" id="como" style="min-height: unset">
      <div class="custom-container">
        <h1 class="headline2" style="color: #ffffff">Misión</h1>
        <p class="mission-vision">
          Queremos que nuestros usuarios tengan la mejor experiencia en su
          viaje, trasladándose cómodos, despreocupados y aprovechando su tiempo
          al máximo.
        </p>
        <div class="line"></div>
        <h1 class="headline2" style="color: #ffffff">Visión</h1>
        <p class="mission-vision">
          Ser la empresa líder en Latinoamérica en el traslado y facturación de
          equipaje de pasajeros, utilizando la tecnología disponible, para
          eliminar los principales cuellos de botella que existen en los
          aeropuertos.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/PersonCard.vue";

export default {
  transition: "transition",
  head() {
    return {
      title: "Sobre nosotros | Hop",
    };
  },
  components: {
    PersonCard,
  },
  data() {
    return {
      hopTeam: [
        {
          name: "Esteban Llanos",
          position: "COO",
          text:
            "Ingeniero Civil en Minas de la Universidad de Santiago. Con algo de experiencia en la gestión y desarrollo de proyectos de automatización de camiones mineros en minería subterránea. Amante en liderar y participar en proyectos sociales e inclusivos que busquen generar más conciencia y producir cambios en la sociedad. Como dato enigmático juego pádel y me dicen la Muralla rancagüina (No me gusta), lo que es totalmente falso, ya que primero que todo soy malo para el pádel y soy de Antofagasta.",
          image: "https://media-exp1.licdn.com/dms/image/C4E03AQE6b2gkB3uVwA/profile-displayphoto-shrink_200_200/0/1603714551205?e=1613606400&v=beta&t=bQiIOgFchKUs0_0K8nqZ4Q5plKKWGWxCOQkqwEocOXY",
          networks: [
            // {
            //   url: "https://",
            //   icon: "twitter",
            // },
            {
              url: "https://www.linkedin.com/in/esteban-llanos-salgado-7a82a61ba/",
              icon: "linkedin",
            },
          ],
        },
        {
          name: "Ignacio Ramírez",
          position: "CEO",
          text:
            "Ingeniero Civil Industrial de la Universidad de Chile. Me gusta la innovación y el emprendimiento. También juego pádel, tenis y cualquier deporte que se me cruce por delante, me gusta pensar que soy bueno pero la gente no opina lo mismo.",
          image: "https://media-exp1.licdn.com/dms/image/C5103AQFgVuk1-QH0qw/profile-displayphoto-shrink_200_200/0/1517084602018?e=1613606400&v=beta&t=zL_GRuwl1WUtVHdAzxgSJE8UwivvVMinsPeaPYJJFWY",
          networks: [
            // {
            //   url: "https://",
            //   icon: "twitter",
            // },
            // {
            //   url: "https://",
            //   icon: "facebook",
            // },
            {
              url: "https://www.linkedin.com/in/ignacio-javier-ram%C3%ADrez-silva-628875b6/",
              icon: "linkedin",
            },
          ],
        },
        {
          name: "Francisco Álvarez",
          position: "CTO",
          text:
            "Ingeniero Civil en Computación de la Universidad de los Andes, con mencion en innovación y emprendimiento. Me gusta jugar juegos de roll como el D&D y tambien juegos de computador como el Witcher 3 y el Guild Wars 2. Ademas me gustan los deportes como el Rugby y Football, o cualquiera que sea en equipo y se pueda jugar con amigos.",
          image: "https://media-exp1.licdn.com/dms/image/C4E03AQEwcpWS_X6IaA/profile-displayphoto-shrink_200_200/0/1534709931232?e=1613606400&v=beta&t=nl0PREAWFQz8YXjsKyU1HbCaq0ISt2R-7odxZaZPFQU",
          networks: [
            // {
            //   url: "https://",
            //   icon: "twitter",
            // },
            // {
            //   url: "https://",
            //   icon: "facebook",
            // },
            {
              url: "https://www.linkedin.com/in/francisco-alvarez-308ba538",
              icon: "linkedin",
            },
          ],
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style>
.about {
  margin: 2rem 0 2rem 0;
  align-items: center;
  display: flex;
  height: auto;
}
.about-title {
  font-family: "Work Sans", sans-serif;
  font-size: 3.5rem;
  margin: 0 0 2.5rem 0;
  word-break: initial;
  line-height: 1;
  font-weight: 600;
  color: #76459a;
}
.about-subtitle {
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  word-break: initial;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.115em;
  color: #707070;
}
.about-container {
  width: 100%;
  height: 100%;
}
.button {
  margin: 0.3rem;
}
.card {
  overflow: visible !important;
}
.bg-about {
  /* padding: 4rem 0 4rem 0; */
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 95vh; */
}
.about-text {
  font-family: "Work Sans", sans-serif;
  font-size: 1.2rem;
  margin: 2.5rem 0 2.5rem 0;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  padding: 0;
  color: #707070;
}
.mission-vision {
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  margin: 2.5rem 0 2.5rem 0;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  padding: 0;
  color: #ffffff;
}
.line {
  border-bottom: 1px solid #ffffff;
  margin: 3rem;
}
@media only screen and (max-width: 1024px) {
  .about {
    margin-right: 5%;
    margin-left: 5%;
  }
}

@media screen and (min-width: 1024px) {
  .about-container {
    /* margin-right: 10%; */
    margin-left: 10%;
  }
}
</style>