<template>
  <div class="about">
  <tablaD/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cards from '@/components/Cards.vue';
import tablaD from '@/components/tablaD.vue';

@Component({
  components: {
    Cards,
    tablaD
  },
})
export default class Home extends Vue {}
</script>