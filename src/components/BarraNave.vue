<template>
<section class="hero ">
    <b-navbar  >
        <template #brand>
            <b-navbar-item class="padding" tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
            
        </template>
        

        <template #end>
            <b-navbar-item  href="#">
                Todos los empleos
            </b-navbar-item>
            <b-navbar-item href="#">
            <router-link to="/about">Documentacion</router-link>
                
            </b-navbar-item>

            <b-navbar-dropdown  label="Categoria">
                <b-navbar-item href="#">
                    Web develer
                </b-navbar-item>
                <b-navbar-item href="#">
                    Tester
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item tag="div">
                <b-field type="is-info span-none" >
                    <b-input
                    
                     placeholder="Buscar..."
                        type="search"
                        icon="magnify"
                        icon-clickable
                        @icon-click="searchIconClick">
                    </b-input>
                    
                </b-field>
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-info">
                        <strong>Nuevo Empleo</strong>
                    </a>
                    <a class="button is-info is-light">     
                        Iniciar sesión
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    </section>
</template>

<script lang="ts">
import { Component, Vue  } from 'vue-property-decorator';

@Component
export default class BarraNave extends Vue {
 
}
</script>
<style scoped lang="scss">
.hero{
     padding: 30px;
}

a:hover{
    color: #167df0;
}
a{
    color: black;
}
.field:focus{
    background-color: yellow;
    width: 250px;
}
.field:in-range{
    border: 2px solid yellow;
}

</style>

