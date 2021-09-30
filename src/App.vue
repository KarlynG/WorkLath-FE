<template>
  <div id="app">
    <div id="nav">
      <BarraNave/>
      <router-view/>
    </div>
    <PiePagina/>
    
  </div>
</template>

<script lang="ts">
import PiePagina from '@/components/PiePagina.vue';
import BarraNave from '@/components/BarraNave.vue';
export default {
  components: {
    PiePagina,
    BarraNave
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
