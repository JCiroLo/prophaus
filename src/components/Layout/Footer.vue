<template>
  <footer
    class="footer"
    :style="{ backgroundImage: `url('${footerBackground}')` }"
  >
    <div class="brand">
      <img
        src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/3.-Logo-tipo-blanca.png"
        alt=""
      />
      <div class="social">
        <a href="/"><span class="fab fa-facebook-f fa-fw"></span></a>
        <a href="/"><span class="fab fa-instagram fa-fw"></span></a>
      </div>
    </div>
    <div class="aditional-info">
      <h3 class="font-title">Enalces útiles</h3>
      <h3 class="font-title">Información adicional</h3>
      <div class="links">
        <a href="/" class="font-content"
          ><span class="fas fa-chevron-right fa-fw"></span> Inicio</a
        >
        <a href="/" class="font-content"
          ><span class="fas fa-chevron-right fa-fw"></span> Contáctanos</a
        >
      </div>
      <p class="font-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque ad
        laudantium explicabo perferendis corporis adipisci, veniam doloremque
        rerum officia hic dolorem necessitatibus maiores consequatur, tempora
        nam corrupti. Natus, non.
      </p>
    </div>
  </footer>
</template>

<script>
import footerBackground from "@/assets/img/footer.png";
export default {
  name: "Footer",
  data() {
    return {
      footerBackground,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  margin-top: 50px;
  padding: 175px 100px 25px 100px;
  background-repeat: none;
  background-size: cover;
  background-position: top;

  .brand {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 75%;
    }
    .social {
      display: flex;

      a {
        margin: 0 0.25em;
        color: white;
        font-size: 2em;
        transition: all 0.25s ease-out;

        &:hover {
          transform: scale(1.25);
        }
      }
    }
  }
  .aditional-info {
    flex: 0 0 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h3 {
      flex: 0 0 50%;
      color: white;
      font-size: 2em;
      margin-bottom: 0.5em;
    }

    .links {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      align-self: flex-start;

      a {
        color: white;
        text-decoration: none;
        margin: 0;
        margin-bottom: 0.5em;
      }
    }

    p {
      flex: 0 0 50%;
      color: white;
      text-decoration: none;
      margin: 0;
    }
  }
}
</style>