<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cards from '@/components/Cards.vue';
import CardProg from '@/components/CardP.vue';
import CardDes from '@/components/CardD.vue';
import Present from '@/components/Presentacion.vue'

@Component({
  components: {
    Cards,
    CardProg,
    CardDes,
    Present
  },
})
export default class Home extends Vue {}

</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>