<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="has-text-white">
        Bolsa de empleos. Copyright 2021-2021. <a>Grupo 5</a> <b>ITLA</b>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService } from "@/core/services/user.service";

@Component
export default class PiePagina extends Vue {
  userService = new UserService();
  async getAllUsers() {
    let result = await this.userService.getAll();
    console.log(result.data.value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-color: #000000;
  padding: 3rem 1.5rem 6rem;
}
a {
  color: #167df0;
}
</style>
