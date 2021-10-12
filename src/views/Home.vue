<template>
  <div class="home">
    <present/>
    <div class="container align-items: center">
      <div class="container">
        <cards/>
        <cards/>
        <cards/>
        <card-des/>
        <hr>
      </div>
      <div class="container">
        <cards/>
        <cards/>
        <cards/>
        <card-prog/>
      </div>
    </div>
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

<style>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>