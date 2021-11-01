<template>
  <div class="cardPost">
    <div class="card card-style-post">
      <div class="card-content is-pointer">
        <div class="content">
          <p class="subtitle is-4 has-text-centered mt-5">Nuevo post</p>
          <div @click="changeOpenState(true), getJobId($event)" id="1">
            <b-icon
              class="center-icon"
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
              <Formulario :jobId="jobId" :postCategory="'Desarrollador'" @add="changeOpenState()" />
            </b-menu>
          </div>
        </b-sidebar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Formulario from "@/components/Formulario.vue";
@Component({
  components: {
    Formulario,
  },
})
export default class CardHome extends Vue {
  jobId = 0;
  isOpen = false;
  changeOpenState(state:boolean) {
    this.isOpen = state;
  }
  getJobId(event: any){
    this.jobId = event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
  }
}
</script>

<style >
.card-style-post {
  max-width: 20rem;
  min-height: 25rem;
  max-height: 25rem;
  min-width: 18rem;
}
.is-pointer {
  cursor: pointer;
}
.center-icon{
  margin-top: 7rem;
   margin-left: 7rem;
}
</style>