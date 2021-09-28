<template>
  <div class="home">
    <HelloWorld/>
    <h2>holaaaaaaaa</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    
  },
})
export default class Home extends Vue {}

</script>
