<template>
  <div class="container is-max-desktop">
    <h1>Publicar nuevo empleo</h1>
    <div class="columns">
      <div class="columns is-two-fifths">
        <div class="field">
          <label class="label">Categoria</label>
          <div class="control">
            <div class="select">
              <select disabled>
                <option>{{postCategory}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <label class="label">Horario</label>
        <label class="radio">
          <input type="radio" name="rsvp" />
          Full time
        </label>
        <label class="radio">
          <input type="radio" name="rsvp" />
          Part Time
        </label>
        <label class="radio">
          <input type="radio" name="rsvp" />
          Freelance
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Compañia</label>
      <div class="control">
        <input
          label="Name"
          class="input is-info"
          type="text"
          placeholder="Compañia"
        />
      </div>
    </div>

    <b-field>
      <b-upload drag-drop expanded>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>

    <b-field class="file">
      <b-upload expanded>
        <a class="button is-info is-fullwidth">
          <b-icon icon="upload"></b-icon>
          <span>Click to upload</span>
        </a>
      </b-upload>
    </b-field>

    <div class="field">
      <label class="label">URL</label>
      <div class="control">
        <input class="input is-info" type="text" placeholder="URL" />
      </div>
    </div>

    <div class="field">
      <label class="label">Posición</label>
      <div class="control">
        <input class="input is-info" type="text" placeholder="Posición" />
      </div>
    </div>

    <div class="field">
      <label class="label">Localización</label>
      <div class="control">
        <input class="input is-info" type="email" placeholder="Localización" />
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
      <div class="control">
        <button class="button is-info is-light" expanded>Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FormJob extends Vue {
  @Prop({default: '', required: true})
  postCategory = '';


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 40px;
}
.checkbox {
  padding-left: 10px;
}

h1 {
  font-size: 2em;
  margin-bottom: 5px;
}
div .field {
  margin-top: 20px;
}
.columns {
  padding-left: 3%;
}
.column {
  padding-left: 5%;
}
</style>