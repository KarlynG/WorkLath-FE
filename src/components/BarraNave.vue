<template>
  <section class="hero">
    <b-navbar>
      <template #brand>
        <b-navbar-item
          class="padding"
          tag="router-link"
          :to="{ path: '/home' }"
        >
          <img
            src="https://raw.githubusercontent.com/adriancast/Bulma-login-template/master/assets/img/logo_r_resumme.png"
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
          <router-link
            class="button is-vcentered is-primary is-outlined"
            :to="`/login`"
            v-if="!isLoggedIn"
          >
            Iniciar sesion
          </router-link>
          <b-dropdown v-else :triggers="['hover']" aria-role="list">
            <template #trigger>
                <b-button
                    :label="username"
                    type="is-info"
                    icon-right="menu-down" />
            </template>

            <b-dropdown-item aria-role="listitem">Ver perfil</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Configuración</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" @click="goHome()">Cerrar sesion</b-dropdown-item>
        </b-dropdown>
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

  get isLoggedIn() {
    return this.$store.state.isLoggedIn;
  }

  get username(){
    return this.$store.state.username;
  }

  goHome(){
    this.$store.commit("isLoggedIn", false);
  }
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

