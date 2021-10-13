<template>
   <div class="vistaT">
<tablaP/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import tablaP from '@/components/tablaP.vue';

@Component({
  components: {
    tablaP
  },
})
export default class vista extends Vue {}
</script>

<style>

</style>