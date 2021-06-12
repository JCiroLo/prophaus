<template>
  <div class="blur-background" :class="{ show }">
    <nav>
      <a class="brand" href="/">
        <img
          src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/1.-Logo-color-1.png"
          alt=""
        />
      </a>
      <div class="actions">
        <button class="btn btn-primary-inv font-title" @click="toggleShow">
          Menú <span class="fas fa-bars fa-fw" />
        </button>
      </div>
    </nav>

    <aside>
      <div class="close">
        <button class="btn btn-primary-inv" @click="toggleShow">
          <span class="fas fa-times fa-fw"></span>
        </button>
      </div>
      <a class="brand" href="/">
        <img
          src="https://esquema.esquema.com.co/prophaus/wp-content/uploads/2021/06/1.-Logo-color-1.png"
          alt=""
        />
      </a>
      <div class="pages">
        <router-link class="font-content" to="/"> Inicio</router-link>
        <router-link class="font-content" to="/about"> Contacto</router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.blur-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  pointer-events: none;

  transition: all 0.25s ease-out;

  &.show {
    background-color: #00000033;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    pointer-events: initial;

    nav {
      opacity: 0;
      transition: all 0s;
    }

    aside {
      opacity: 1;
      transform: translateX(0);
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    height: $nav_height;
    padding: 0 25px;
    background-color: white;
    opacity: 1;
    pointer-events: initial;

    transition: all 0.25s ease-out;

    .brand img {
      height: 100%;
    }
    .actions {
      align-self: center;
    }
  }

  aside {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 33%;
    height: 100%;
    padding: 25px;
    padding-top: 0;
    background-color: white;
    opacity: 0;
    pointer-events: initial;

    transform: translateX(100%);
    transition: all 0.25s ease-out;

    .close {
      align-self: flex-end;
      display: flex;
			align-items: center;
      height: $nav_height;

      button {
        padding: 0.75em;
        border-radius: 50%;

        span {
          margin: 0;
        }
      }
    }
    .brand {
      margin: 25px 0;

      img {
        width: 100%;
      }
    }
    .pages {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a {
        position: relative;
        margin: 0.25em 0;
        padding: 0.25em;
        font-weight: 600;
        font-size: 1.75em;
        text-decoration: none;
        color: $color_text_dark;

        transition: all 0.25s ease-out;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 3px;
          height: 3px;
          background-color: $color_text_dark;

          transition: all 0.25s ease-out;
        }

        &.router-link-active {
          color: $color_primary_normal;

          &::after {
            right: 0;
            background-color: $color_primary_normal;
          }
        }

        &:hover {
          color: $color_primary_normal;

          &::after {
            right: 0;
            background-color: $color_primary_normal;
          }
        }
      }
    }
  }
}
</style>