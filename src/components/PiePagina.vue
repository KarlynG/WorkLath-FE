<template>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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
    background-color: #e6e6e6;
    padding: 3rem 1.5rem 6rem;
    }
    
    a{
    color: #167df0;
}

</style>