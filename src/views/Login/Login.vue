<template>
  <div class="login">
    <div class="columns is-vcentered">
      <div class="login column is-4">
        <section class="section">
          <div class="has-text-centered">
            <img
              src="https://raw.githubusercontent.com/adriancast/Bulma-login-template/master/assets/img/logo_r_resumme.png"
              class="login-logo"
            />
          </div>

          <div class="field">
            <label class="label">Usuario</label>
            <div class="control has-icons-right">
              <input
                class="input"
                type="text"
                v-model="authenticateModel.username"
              />
              <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control has-icons-right">
              <input
                class="input"
                type="password"
                v-model="authenticateModel.password"
              />
              <span class="icon is-small is-right">
                <i class="fa fa-key"></i>
              </span>
            </div>
          </div>
          <div class="has-text-centered">
            <a
              class="button is-vcentered is-primary is-outlined"
              @click="logUser()"
            >
              Login
            </a>
          </div>
          <div class="has-text-centered">
            <router-link :to="`/register`">
              No tienes cuenta? Registrate ahora!
            </router-link>
          </div>
        </section>
      </div>
      <div id="particles-js" class="interactive-bg column is-8"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AuthenticateRequest } from "@/core/model";
import { UserService } from "@/core/services";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginView extends Vue {
  authenticateModel = new AuthenticateRequest();
  userService = new UserService();
  created() {
    this.$store.commit("hideNavbarAndFooter", true);
  }
  async logUser() {
    try {
      await this.userService.authenticateUser(this.authenticateModel);
      this.$router.push({ name: 'Home' })
    } catch (e) {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Usuario o contraseña incorrectos`,
        position: "is-top",
        type: "is-danger",
      });
    }
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