<template>
  <div class="container is-max-desktop">
                <h1>Nuevo empleo</h1>

            <div class="field">
            <label class="label">Categoria</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
                </div>
            </div>
            </div>
                <label class="label">Horario</label>
                        <label class="radio">
                        <input type="radio" name="rsvp">
                        Full time
                        </label>
                    <label class="radio">
                        <input type="radio" name="rsvp">
                        Part Time
                    </label>
                    <label class="radio" >
                        <input type="radio" name="rsvp" >
                        Freelance
                    </label>

            <div class="field " >
                <label class="label">Compañia</label>
            <div class="control">
                <input label="Name" class="input is-info" type="text" placeholder="Compañia">
            </div>
            </div>

                <div class="file is-info has-name">
                <label class="file-label"> 
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Logo
                    </span>
                    </span>
                    <span class="file-name">
                    dsdfasdfasdfasdfasdfdsfadsfasdfaskdfaksdbfkjasdfjkasdfkjhasdkjfhaskjdfhaskjdhfajskdhfjaksdhfjkasdhfjaksdhfjkashdfjashdfjakshf
                    </span>
                </label>
                </div>

            

            <div class="field">
            <label class="label">URL</label>
            <div class="control ">
                <input class="input is-info" type="text" placeholder="URL" >
            </div>
            </div>
            
            <div class="field">
            <label class="label">Posición</label>
            <div class="control ">
                <input class="input is-info" type="text" placeholder="Posición" >
            </div>
            </div>

            <div class="field">
            <label class="label">Localización</label>
            <div class="control ">
                <input class="input is-info" type="email" placeholder="Localización">
                 
            </div>
            </div>

            <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
                <textarea class="textarea is-info" placeholder="Textarea"></textarea>
            </div>
            </div>

            <div class="field is-grouped">
            <div class="control">
                <button class="button is-info">Enviar</button>
            </div>
            <div class="control ">
                <button class="button is-info is-light" expanded>Cancelar</button>
            </div>
            </div>
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';


@Component
export default class Formulario extends Vue {
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container{
     padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 40px;

    }
    .checkbox{
        padding-left: 10px;
    }

    h1{
        font-size: 2em;
        margin-bottom: 5px;
    }
    div .field{
        margin-top:20px ;
    }
</style>