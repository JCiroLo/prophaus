<template>
  <div class="detail">
    <section class="container">
      <h1 class="font-title title">{{ currentEstate.title }}</h1>
      <p class="font-content description">{{ currentEstate.description }}</p>
      <div class="thumb"><img :src="currentEstate.thumb" alt="" /></div>
      <div class="progress-bar">
        <div class="progress font-content" :style="{ width: `${percentage}%` }">
          {{
            percentage < 10 ? `${percentage}%` : `Conseguido: ${percentage}%`
          }}
        </div>
      </div>
      <div class="prices font-content">
        <div class="price-element">
          <strong>Requerido</strong>
          <span
            >${{
              new Intl.NumberFormat("de-DE").format(currentEstate.required)
            }}</span
          >
        </div>
        <div class="price-element">
          <strong>Conseguido</strong>
          <span
            >${{
              new Intl.NumberFormat("de-DE").format(currentEstate.collected)
            }}</span
          >
        </div>
        <div class="price-element">
          <strong>Monto mínimo</strong>
          <span
            >${{
              new Intl.NumberFormat("de-DE").format(
                currentEstate.minimum_amount
              )
            }}</span
          >
        </div>
        <div class="price-element">
          <strong>Pazo estimado</strong>
          <span>{{ currentEstate.estimated_date }}</span>
        </div>
      </div>
      <div class="article-section">
        <h2 class="font-title">Acerca del proyecto</h2>
        <p class="font-content">{{ currentEstate.about_project }}</p>
      </div>
      <div class="article-section">
        <h2 class="font-title">Planeación estrategica</h2>
        <p class="font-content">{{ currentEstate.strategic_planning }}</p>
      </div>
      <div class="article-section font-content">
        <h2 class="font-title">Ventajas identificadas</h2>
        <p>{{ currentEstate.identified_advantages }}</p>
        <ul class="fa-ul">
          <li
            v-for="(adventage, idx) of currentEstate.identified_advantages_list"
            :key="idx"
          >
            <i class="fa-li fas fa-chevron-right"></i> {{ adventage }}
          </li>
        </ul>
      </div>
      <div class="article-section font-content">
        <h2 class="font-title">Ubicacion</h2>
        <p>{{ currentEstate.location }}</p>
        <ul class="fa-ul">
          <li
            v-for="(list_location, idx) of currentEstate.location_list"
            :key="idx"
          >
            <i class="fa-li fas fa-chevron-right"></i> {{ list_location }}
          </li>
        </ul>
      </div>
      <div class="article-section font-content">
        <h2 class="font-title">Respaldo</h2>
        <p>{{ currentEstate.backrest }}</p>
        <ul class="fa-ul">
          <li
            v-for="(list_backrest, idx) of currentEstate.backrest_list"
            :key="idx"
          >
            <i class="fa-li fas fa-chevron-right"></i> {{ list_backrest }}
          </li>
        </ul>
      </div>
    </section>
    <section class="side-actions">
      <!-- Formulario de contacto -->
      <form class="font-content" id="contact-us" novalidate>
        <h2 class="font-title">Contáctanos</h2>
        <div class="custom-form" for="name">
          <input type="text" name="name" id="name" />
          <label class="placeholder">Nombre</label>
        </div>
        <div class="custom-form" for="email">
          <input type="email" name="email" id="email" />
          <label class="placeholder">Correo</label>
        </div>
        <div class="custom-form" for="tel">
          <input type="tel" name="tel" id="tel" />
          <label class="placeholder">Teléfono</label>
        </div>
        <div class="custom-form" for="message">
          <textarea rows="5" name="message" id="message" />
          <label class="placeholder">Mensaje</label>
        </div>
      </form>
      <!-- Calculadora de inversión  -->
      <form class="font-content" id="calculator" novalidate>
        <h2 class="font-title">Simulador de inversión</h2>
        <div class="custom-form">
          <input type="number" id="calc" />
          <label class="placeholder">Valor</label>
        </div>
        <div class="custom-form">
          <input type="number" id="inicial" disabled />
          <label class="placeholder">Monto incial</label>
        </div>
        <div class="custom-form">
          <input type="number" id="rentabilidad" disabled />
          <label class="placeholder">Rentabilidad estimada</label>
        </div>
        <div class="custom-form">
          <input type="number" id="estimado" disabled />
          <label class="placeholder">Ganancia estimada</label>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      currentEstate: {},
      achieved: false,
      percentage: 0,
    };
  },
  beforeMount() {
    // Se hace la llamada a la API
    console.log(this.$route.params.id);
    // Asignamos la propiedad obtenida
    this.currentEstate = {
      thumb:
        "https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/modern-house-entrance-with-garden-and-wooden-deck-PXUADMN-scaled-1-1536x1037.jpg",
      title: "Memory Vault for pictures",
      description: "Lorem ipsum dolor",
      required: 200000000,
      collected: 40000000,
      minimum_amount: 2000000,
      estimated_date: "24 meses",
      about_project:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, est himenaeos nam blandit ac at velit, massa ultrices torquent potenti lacus accumsan. Conubia laoreet quis eget tellus mus pretium dis, vestibulum accumsan integer aptent turpis imperdiet non id,",
      strategic_planning:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, est himenaeos nam blandit ac at velit, massa ultrices torquent potenti lacus accumsan. Conubia laoreet quis eget tellus mus pretium dis, vestibulum accumsan integer aptent turpis imperdiet non id, eleifend nisl molestie urna vehicula nibh. Rutrum mi ligula convallis quis nibh tellus dis, hac imperdiet sociis ultrices interdum sapien, nisl tristique odio ad lacinia magna. Lorem ipsum dolor sit amet consectetur adipiscing elit, est himenaeos nam blandit ac at velit, massa ultrices torquent potenti lacus accumsan. Conubia laoreet quis eget tellus mus pretium dis, vestibulum accumsan integer aptent turpis imperdiet non id, eleifend nisl molestie urna vehicula nibh.",
      identified_advantages: "Hola como estas xd",
      identified_advantages_list: [
        "Alta valorización de la zona",
        "Urbanización en Construcción",
        "Alto atractivo turístico",
        "Ubicación estratégica",
      ],
      location: "Brucelas",
      location_list: [
        "A 5 minutos del nuevo Hotel Mesa de los Santos",
        "A 5 minutos del Pony Parque. Nuevo referente turístico de la Mesa de Los Santos",
        "A 20 minutos del Parque Nacional del Chicamocha",
      ],
      backrest:
        "El vendedor de la urbanización es GS Inmobiliaria, reconocido desarrollador con varios proyectos en la zona",
      backrest_list: [
        "La firma Vargas Arquitectos, es una compañía de Medellín especializada en proyectos de bioclimática",
        "La construcción será controlada y supervisada por Prophaus.",
      ],
    };
    this.achieved =
      this.currentEstate.collected === this.currentEstate.required;
    this.percentage =
      (this.currentEstate.collected / this.currentEstate.required) * 100;
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 25px;
  margin: 0 25px;
  margin-top: $nav_height;

  .container {
    display: flex;
    flex-direction: column;

    .title {
      align-self: center;
      margin: 0;
      margin-bottom: 0.25em;
      font-size: 2.25em;
      color: $color_primary_normal;
    }
    .description {
      align-self: center;
      margin: 0.5em 0;
      margin-bottom: 2em;
      color: $color_text_light;
    }
    .thumb img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 25px;
    }
    .progress-bar {
      display: flex;
      background-color: $color_border;
      height: 30px;
      border-radius: 25px;

      .progress {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        padding: 0 25px;
        border-radius: 25px;
        background-color: $color_primary_normal;
        color: white;
        font-weight: 600;
      }
    }
    .prices {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 25px;
      width: 100%;
      margin: 25px 0;

      .price-element {
        display: flex;
        flex-direction: column;
        text-align: center;

        strong {
          margin-bottom: 0.25em;
          font-size: 1.25em;
          font-weight: 600;
          color: $color_text_dark;
        }
        span {
          font-size: 1.25em;
          font-weight: 400;
          color: $color_text_light;
        }
      }
    }
    .article-section {
      h2 {
        color: $color_primary_normal;
      }
      p {
        text-align: justify;
        color: $color_text_light;
        font-weight: 500;
      }
      ul li i {
        color: $color_primary_light;
      }
    }
  }
  .side-actions {
    position: sticky;
    position: -webkit-sticky;
    top: $nav_height;
    align-self: flex-start;

    form {
      display: flex;
      flex-direction: column;

      h2 {
        margin: 1em 0;
        font-size: 2.25em;
        text-align: center;
        color: $color_primary_normal;
      }

      .custom-form {
        position: relative;
        display: flex;
        margin: 0;
        padding: 0;

        input {
          height: 1.5em;

          &:disabled {
            background-color: $color_border;
          }
        }

        input:focus + label,
        textarea:focus + label,
        label.active {
          transform: translate(-0em, -0.25rem);
          font-size: 12px;
          font-weight: 600;
        }

        input:focus ~ span,
        textarea:focus ~ span,
        select:focus ~ span {
          left: 0;
          right: 0;
          opacity: 1;

          transition: all 0.25s ease-out;
        }

        input:focus + label,
        textarea:focus + label {
          color: $color_primary_dark;
        }

        label {
          position: absolute;
          top: 0.75em;
          left: 0.5em;
          margin: 0;
          padding: 0.5rem;
          pointer-events: none;
          color: $color_text_dark;

          transition: all 0.1s ease-out;
        }

        span {
          position: absolute;

          top: 100%;
          left: 50%;
          right: 50%;
          opacity: 0;
          height: 1px;
          background-color: $color_primary_normal;

          transition: transform 0s, opacity 0.25s ease-out;
        }

        input,
        textarea {
          width: 100%;
          margin: 0.5em 0;
          padding: 0.75rem 0.75rem 0.25rem 0.75rem;
          border-radius: 25px;
          background-color: transparent;
          border: 2px solid $color_border;

          transition: all 0.25s ease-out;

          &:focus {
            outline: none;
            box-shadow: none;
            border-color: $color_primary_dark;
          }

          &.active {
            border-color: $color_primary_light;
            color: $color_primary_light;
          }

          &.invalid {
            border-color: tomato;
            color: tomato;
          }
        }
      }
    }
  }
}
</style>