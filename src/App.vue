<template>
  <div id="app">
    <div id="nav">
      <BarraNave v-if="!hideNavbarAndFooter" />
      <router-view/>
    </div>
    <PiePagina v-if="!hideNavbarAndFooter" />
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PiePagina from '@/components/PiePagina.vue';
import BarraNave from '@/components/BarraNave.vue';

@Component({
  components: {
    PiePagina,
    BarraNave
  }
})
export default class App extends Vue {
 get hideNavbarAndFooter() {
    return this.$store.state.hideNavbarAndFooter;
  }
}
</script>

<style lang="scss">



</style>
