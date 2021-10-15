<template>
  <div class="cardPost is-pointer">
    <div class="card card-style-post">
      <div class="card-content">
        <div class="content">
          <p class="subtitle is-4 has-text-centered mt-5">Agregar nuevo empleto</p>
          <div @click="changeOpenState()">
            <b-icon
              style="margin-top: 7rem; margin-left: 7rem"
              icon="plus"
              size="is-large"
              type="is-primary"
            >
            </b-icon>
          </div>
        </div>
        <b-sidebar
          fullheight
          overlay
          right
          v-model="isOpen"
        >
          <div class="p-1">
            <b-menu>
              <Formulario :postCategory="'Desarrollador'" />
            </b-menu>
          </div>
        </b-sidebar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Formulario from "@/components/Formulario.vue";
@Component({
  components: {
    Formulario,
  },
})
export default class CardHome extends Vue {
  isOpen = false;
  changeOpenState() {
    this.isOpen = true;
    console.log(this.isOpen);
  }
}
</script>

<style>
.card-style-post {
  max-width: 20rem;
  min-height: 25rem;
  max-height: 25rem;
}
.is-pointer {
  cursor: pointer;
}
</style>