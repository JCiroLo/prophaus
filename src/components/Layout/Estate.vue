<template>
  <article class="estate" :class="{ fondeado: achieved }">
    <div class="visual">
      <img :src="img" alt="" />
      <span class="state font-title">{{
        achieved ? "FONDEADO" : "DISPONIBLE"
      }}</span>
      <div class="progress-bar">
        <div
          class="collected-bar font-content"
          :style="{ width: `${percentage}%` }"
        >
          Conseguido... {{ percentage }}%
        </div>
      </div>
    </div>
    <div class="summary">
      <h2 class="font-title title">{{ title }}</h2>
      <p class="font-content description">{{ description }}</p>
      <hr />
      <div class="prices font-content">
        <div class="price-element">
          <strong>Requerido</strong>
          <span>${{ new Intl.NumberFormat("de-DE").format(required) }}</span>
        </div>
        <div class="price-element">
          <strong>Conseguido</strong>
          <span>${{ new Intl.NumberFormat("de-DE").format(collected) }}</span>
        </div>
        <div class="price-element">
          <strong>Monto mínimo</strong>
          <span
            >${{ new Intl.NumberFormat("de-DE").format(minimum_amount) }}</span
          >
        </div>
        <div class="price-element">
          <strong>Pazo estimado</strong>
          <span>{{ estimated_date }}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="btn btn-primary font-title dis">Quiero invertir</button>
      <button class="btn btn-primary font-title dis">Conocer más</button>
      <button class="btn btn-secondary font-title fon">Ver proyecto</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Estate",
  props: [
    "img",
    "title",
    "description",
    "required",
    "collected",
    "estimated_date",
    "minimum_amount",
  ],
  data() {
    return {
      achieved: this.collected === this.required,
      percentage: (this.collected / this.required) * 100,
    };
  },
};
</script>

<style lang="scss" scoped>
article.estate {
  border: 1px solid $color_border;
  border-radius: 25px;
  overflow: hidden;

  transition: box-shadow 0.5s ease-out;

  .visual {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
      border-radius: 25px 25px 0 0;
      cursor: pointer;
      transition: all 0.25s ease-out;
    }

    .state {
      position: absolute;
      bottom: 40px;
      right: 5px;
      padding: 0.5em;
      border-radius: 25px;
      background-color: $color_primary_normal;
      color: white;
      font-weight: 600;
    }

    .progress-bar {
      display: flex;
      height: 30px;
      background-color: $color_border;
      widows: 100%;
      z-index: 1;

      .collected-bar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: inherit;
        widows: inherit;
        padding: 0 calc(5px + 0.5em);
        white-space: nowrap;
        overflow: hidden;
        background-color: $color_primary_normal;
        color: white;
        font-weight: bold;
      }
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-bottom: 0;
    }

    .description {
      color: $color_text_light;
      margin-bottom: 0;
    }

    hr {
      width: calc(100% - 25px);
      margin: 25px 0;
      border-color: $color_shadow;
    }

    .prices {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 25px;
      width: 100%;

      .price-element {
        display: flex;
        flex-direction: column;
        padding: 0 25px;
        text-align: center;

        strong {
          margin-bottom: 0.25em;
          font-size: 1.25em;
          font-weight: 600;
        }
        span {
          font-size: 1.25em;
          font-weight: 400;
        }
      }
    }
  }

  .actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    padding: 25px;

    .fon {
      display: none;
    }
  }

  &.fondeado {
    .state {
      background-color: $color_secondary_normal;
      color: $color_text_dark;
    }

    .collected-bar {
      background-color: $color_secondary_normal !important;
      color: $color_text_dark !important;
    }

    .actions {
      grid-template-columns: repeat(1, 1fr);
      .fon {
        display: initial;
      }

      .dis {
        display: none;
      }
    }
  }

  &:hover {
    box-shadow: 0 0 20px $color_border;
    img {
      transform: scale(1.1);
    }
  }
}
</style>