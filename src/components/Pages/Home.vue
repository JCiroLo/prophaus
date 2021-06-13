<template>
  <div class="container">
    <div class="greeting">
      <div class="summary">
        <h1 class="font-title">Prophaus</h1>
        <p class="font-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          pariatur ullam minima exercitationem voluptatum rem itaque vel ex
          amet. Cum voluptas blanditiis, minima sequi excepturi consequatur a
          totam quis. Dolorem!
        </p>
        <button class="btn btn-primary font-title">
          Inscribete <span class="fas fa-arrow-right fa-fw" />
        </button>
      </div>
      <img
        src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/news-4-2-1536x1393.jpg"
        alt=""
      />
    </div>
    <div class="motivational-phrase">
      <p class="font-content">
        Esto es una frase explicativa y motivacional, ¿A que te dan ganas de
        invertir en nostros, eh?
      </p>
      <button class="btn btn-primary-inv font-title">
        Conoce mas sobre nosotros <span class="fas fa-arrow-right" />
      </button>
    </div>
    <div class="estates">
      <Estate
        v-for="(estate, idx) of estates"
        :key="idx"
        :img="estate.thumb"
        :title="estate.title"
        :description="estate.description"
        :required="estate.required"
        :collected="estate.collected"
        :estimated_date="estate.estimated_date"
        :minimum_amount="estate.minimum_amount"
      />
      <button class="btn btn-primary-inv font-title">Ver mas proyectos <span class="fas fa-arrow-right" /></button>
    </div>
    <div class="features">
      <div class="section-title">
        <small class="font-title">Explora</small>
        <h2 class="font-title">Características</h2>
      </div>
      <div class="section-cards">
        <div class="card">
          <span class="fas fa-home fa-fw"></span>
          <h3 class="font-title">Perfect tools</h3>
          <p class="font-content">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat
            ipsum, nec sagittis sem nibh
          </p>
        </div>
        <div class="card">
          <span class="fab fa-searchengin fa-fw"></span>
          <h3 class="font-title">Search in Click</h3>
          <p class="font-content">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat
            ipsum, nec sagittis sem nibh
          </p>
        </div>
        <div class="card">
          <span class="fas fa-unlock-alt fa-fw"></span>
          <h3 class="font-title">User Control</h3>
          <p class="font-content">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat
            ipsum, nec sagittis sem nibh
          </p>
        </div>

        <div class="card">
          <span class="far fa-star fa-fw"></span>
          <h3 class="font-title">5 Star Support</h3>
          <p class="font-content">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat
            ipsum, nec sagittis sem nibh
          </p>
        </div>
      </div>
    </div>
    <div class="perfect-places">
      <div class="section-title">
        <small class="font-title">Ciudades populares</small>
        <h2 class="font-title">Encuentra el lugar perfecto</h2>
      </div>
      <div class="section-cards">
        <div
          class="card"
          :style="{
            backgroundImage: `url(https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/news-4-2-1536x1393.jpg)`,
          }"
        >
          <div class="summary">
            <h3 class="font-title">New york</h3>
            <p class="font-content">4 listings</p>
          </div>
          <button class="btn">
            <span class="fas fa-angle-right fa-fw"></span>
          </button>
        </div>
        <div
          class="card"
          :style="{
            backgroundImage: `url(https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/news-4-2-1536x1393.jpg)`,
          }"
        >
          <div class="summary">
            <h3 class="font-title">Florida</h3>
            <p class="font-content">2 listings</p>
          </div>
          <button class="btn">
            <span class="fas fa-angle-right fa-fw"></span>
          </button>
        </div>
        <div
          class="card"
          :style="{
            backgroundImage: `url(https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/news-4-2-1536x1393.jpg)`,
          }"
        >
          <div class="summary">
            <h3 class="font-title">Massachusetts</h3>
            <p class="font-content">3 listings</p>
          </div>
          <button class="btn">
            <span class="fas fa-angle-right fa-fw"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="testimonials">
      <div class="section-title">
        <small class="font-title">Los clientes dicen...</small>
        <h2 class="font-title">Testimonios</h2>
      </div>
      <div class="section-comments">
        <div class="comment">
          <div class="content">
            <span class="fas fa-quote-left"></span>
            <p class="font-content">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco
              nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum
              velit. Nam nec tellus a odio tinci.
            </p>
          </div>
          <div class="author">
            <img
              src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/elementor/thumbs/young-male-fashion-model-in-blue-jeans-and-shirt-PPKYYDU-scaled-1-p83d1ubush12whiyl8csxm6pe0581znp1pa8ualh2a.jpg"
              alt=""
            />
            <h3 class="font-title">Kritsofer Nolan</h3>
          </div>
        </div>
        <div class="comment">
          <div class="content">
            <span class="fas fa-quote-left"></span>
            <p class="font-content">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco
              nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum
              velit. Nam nec tellus a odio tinci.
            </p>
          </div>
          <div class="author">
            <img
              src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/elementor/thumbs/portrait-of-female-doctor-in-exam-room-P3N5DLE-scaled-1-p83d20wq4ba35r9eit76x2ixjp8sjvdtelun78bpuq.jpg"
              alt=""
            />
            <h3 class="font-title">Selena Smith</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Estate from "../Layout/Estate.vue";
export default {
  name: "Home",
  components: {
    Estate,
  },
  data() {
    return {
      estates: [
        {
          thumb:
            "https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/modern-house-entrance-with-garden-and-wooden-deck-PXUADMN-scaled-1-1536x1037.jpg",
          title: "Memory Vault for pictures",
          description: "Lorem ipsum dolor",
          required: 200000000,
          collected: 40000000,
          minimum_amount: 2000000,
          estimated_date: "24 meses",
        },
        {
          thumb:
            "https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/space-of-a-modern-house-P9C8JAJ-scaled-1-1536x1024.jpg",
          title: "Croatia Holidays market",
          description: "Cualquier cosa",
          required: 400000000,
          collected: 400000000,
          minimum_amount: 4000000,
          estimated_date: "16 meses",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 100px;

  .section-title {
    margin: 75px 0 50px;
    text-align: center;

    small {
      color: $color_text_light;
    }

    h2 {
      margin-top: 0.25em;
      font-size: 2em;
    }
  }

  .greeting {
    display: flex;
    justify-content: center;
    margin: 0 -75px;
    margin-top: $nav_height;
    height: calc(100vh - #{$nav_height});

    .summary {
      flex: 0 1 50%;
      align-self: center;
      margin: 25px;
      margin-left: 0;

      h1 {
        font-size: 3em;
        margin: 0;
      }
    }

    img {
      flex: 0 0 50%;
      height: auto;
      margin: 25px;
      margin-right: 0;
      border-radius: 25px;
    }
  }

  .motivational-phrase {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0;
    padding: 1em;
    border-radius: 25px;
    background-color: $color_shadow;

    p {
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  .estates {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 25px;
  }

  .features {
    margin: 50px 0;

    .section-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      column-gap: 25px;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5em;
        border: 3px solid $color_shadow;
        border-radius: 25px;
        cursor: pointer;

        transition: all 0.25s ease-out;

        &:hover {
          box-shadow: 0 0 20px rgba($color_text_light, 0.1);

          transform: scale(1.05);
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 75px;
          height: 75px;
          padding: 0.2em;
          font-size: 3.5em;
          border-radius: 50%;
          color: white;
          background-color: $color_primary_normal;

          transition: all 0.25s ease-out;
        }

        h3 {
          margin: 1.5em 0;
        }

        p {
          margin: 0;
          text-align: center;
          color: $color_text_light;
        }
      }
    }
  }

  .perfect-places {
    margin: 25px 0;

    .section-cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 25px;

      .card {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 15px;
        padding-top: 75%;
        background-position: center;
        background-size: cover;
        border-radius: 25px;
        cursor: pointer;

        &:hover {
          &::after {
            background-image: linear-gradient(
              180deg,
              transparent,
              rgba($color_primary_normal, 0.25)
            );
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            180deg,
            transparent,
            rgba($color_primary_normal, 0.5)
          );
          border-radius: 25px;

          transition: background-image 0.25s ease-out;
        }

        .summary {
          color: white;
          z-index: 1;

          h3 {
            margin-bottom: 0.25em;
          }

          p {
            margin: 0;
          }
        }

        button {
          color: white;
          z-index: 1;
          border: 2px solid white;
          border-radius: 50%;
          padding: 0.5em;

          span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25px;
            height: 25px;
            margin: 0;
          }
        }
      }
    }
  }

  .testimonials {
    margin: 25px 0;

    .section-comments {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 25px;

      .comment {
        display: flex;
        flex-direction: column;
        align-items: center;

        .content {
          display: flex;
          padding: 25px;
          border-radius: 25px;
          background-color: $color_shadow;

          span {
            margin-right: 25px;
            font-size: 2em;
            color: $color_primary_normal;
          }
          p {
            margin: 0;
            color: $color_text_light;
          }
        }

        .author {
          display: flex;
          align-items: center;
          margin-top: 25px;

          img {
            border-radius: 50%;
            margin-right: 25px;
          }
        }
      }
    }
  }
}
</style>