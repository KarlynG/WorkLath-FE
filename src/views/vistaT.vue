<template>
   <div class="vistaT">
<h3>Hola mam</h3>
<tablaf/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import tablaf from '@/components/tablaF.vue';

@Component({
  components: {
    tablaf
  },
})
export default class vista extends Vue {}
</script>

<style>

</style>