<template>
  <footer class="footer">
  <div class="content has-text-centered">
    <p class="has-text-white">
       El Proyecto consiste en un sitio web de una Bolsa de Empleos.
    </p>
    
  </div>
</footer>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';

@Component
export default class PiePagina extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer{
      margin-top: 50px;
    background-color: #000000;
    padding: 3rem 1.5rem 6rem;
    }
    
    a{
    color: #167df0;
}

</style>