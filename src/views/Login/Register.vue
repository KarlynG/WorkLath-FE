<template>
  <div class="register">
      <div class="columns is-vcentered">
      <div class="login column is-4 ">
        <section class="section">
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control has-icons-right">
              <input class="input" type="text" v-model="userModel.name">
              <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Apellido</label>
            <div class="control has-icons-right">
              <input class="input" type="text" v-model="userModel.lastName">
              <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-right">
              <input class="input" type="text" v-model="userModel.email">
              <span class="icon is-small is-right">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Usuario</label>
            <div class="control has-icons-right">
              <input class="input" type="text" v-model="userModel.userName">
              <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-right">
              <input class="input" type="password" v-model="userModel.password">
              <span class="icon is-small is-right">
                <i class="fa fa-key"></i>
              </span>
            </div>
          </div>
          <div class="has-text-centered">
            <a class="button is-vcentered is-primary is-outlined" @click="createUser()">Sign Up!</a>
          </div>
          <div class="has-text-centered">
            <router-link
              :to="`/login`"
            >
              Ya tienes cuenta? Ingresa aquí
            </router-link>
          </div>
        </section>
      </div>
      <div id="particles-js" class="interactive-bg column is-8">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Users } from "@/core/model";
import { UserService } from "@/core/services";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RegisterView extends Vue {
  userModel = new Users();
  userService = new UserService();

  async createUser(){
    try {
      await this.userService.post(this.userModel);
      this.$buefy.toast.open({
        duration: 5000,
        message: `Usuario registrado!`,
        position: "is-top",
        type: "is-success",
      });
      this.$router.push({ name: 'Login' })
    } catch (e) {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Ha ocurrido un error`,
        position: "is-top",
        type: "is-danger",
      });
    }
  }
    created() {
    this.$store.commit("hideNavbarAndFooter", true);
  }
}
</script>

<style scoped>
.interactive-bg {
  height: 100vh;
  background-color: #00d1b2;
  -webkit-box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  -moz-box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  padding: 0px;
}
@media (max-width: 769px) {
  .interactive-bg {
    display: none;
  }
}

.input {
  border-radius: 50px;
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}

.login-logo {
  margin: 0 auto;
  margin-bottom: 50px;
  max-height: 100px;
}

.columns {
  margin: 0px;
}
</style>