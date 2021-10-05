<template>
  <div class="home">
    <div class="container">
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

@Component({
  components: {
    Cards,
    CardProg,
    CardDes
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