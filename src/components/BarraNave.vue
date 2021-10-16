<template>
  <section class="hero">
    <b-navbar>
      <template #brand>
        <b-navbar-item class="padding" tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item class="has-text-info" href="#">
          Todos los empleos
        </b-navbar-item>
        <b-navbar-item
          class="has-text-info"
          tag="router-link"
          :to="{ path: '/about' }"
        >
          Documentacion
        </b-navbar-item>

        <b-navbar-dropdown label="Categoria">
          <b-navbar-item href="#"> Web develer </b-navbar-item>
          <b-navbar-item href="#"> Tester </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="div">
          <b-field type="is-info span-none">
            <b-input
            class="pb-4"
              placeholder="Buscar..."
              type="search"
              icon="magnify"
              icon-clickable
            >
            </b-input>
          </b-field>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <!--Final del sidebar-->
            <a class="button is-info is-light"> Iniciar sesión </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Formulario from "@/components/Formulario.vue";

@Component({
  components: {
    Formulario,
  },
})
export default class BarraNave extends Vue {
  open = false;
  overlay = true;
  fullheight = true;
  right = true;
  width = true;
}
</script>


<style >
.hero {
  padding: 30px;
}

a:hover {
  color: #167df0;
}
a {
  color: black;
}

.p-1 {
  padding: 1em;
}
.container .is-max-desktop {
  width: 40%;
}
.b-sidebar .sidebar-content {
  width: 580px !important;
}
.select:not(.is-multiple):not(.is-loading)::after,
.navbar-link:not(.is-arrowless)::after {
  border-color: #167df0 !important;
}
</style>

