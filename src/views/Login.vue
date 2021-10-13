<template>


  <div class="columns is-vcentered">
      <div class="login column is-4 ">
        <section class="section has-background-white">
          <div class="has-text-centered">
              <img class="login-logo" src="@/assets/2e4566fd829bcf9eb11ccdb5f252b02f.jpg">
          </div>
     

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-right">
              <input class="input is-info is-rounded" type="text">
              <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-right">
              <input class="input is-info is-rounded" type="password">
              <span class="icon is-small is-right">
                <i class="fa fa-key"></i>
              </span>
            </div>
          </div>
          <div class="has-text-centered">
            <a class="button is-vcentered is-info is-outlined">Login</a>
          </div>
          <div class="has-text-centered ">
            <a class="has-text-info" href="signup.html"> Don't you have an account? Sign up now!</a>
          </div>
        </section>
      </div>
      <div id="particles-js" class="interactive-bg column is-8">
      </div>
    </div>

  

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    
  },
})
export default class Login extends Vue {
 
}

</script>
<style scoped lang="scss" >
.columns{
  background: #2980B9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.label{
    padding-top: 10px;
}
button{
    
    margin: 10px 10px;
    
}
</style>