<template>
  <div class="home">
    <h3>Desing</h3>
    <hr>
    <div class="container">
      <cards/>
      <cards/>
      <cards/>
      <cards/>
      <hr>
    </div>
    <hr>
    <h3>Progamming</h3>
    <hr>
    <div class="container">
      <cards/>
      <cards/>
      <cards/>
      <cards/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cards from '@/components/Cards.vue';

@Component({
  components: {
    Cards,
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