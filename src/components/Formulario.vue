<template>
  <div class="container is-max-desktop">
    <h1>Nuevo empleo</h1>
        <form name="formulario" action="">
              <div class="columns">
                <div class="columns is-two-fifths">
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
                </div>
                <div class="column">
                  <label class="label">Horario</label>
                  <label class="radio">
                    <input type="radio" 
                    name="category" />
                    Full time
                  </label>
                  <label class="radio">
                    <input type="radio" name="category" />
                    Part Time
                  </label>
                  <label class="radio">
                    <input type="radio" name="category" />
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
                    v-model="jobModel.company"
                    placeholder="Compañia"
                  />
                </div>
              </div>

              <b-field>
                <b-upload  drag-drop expanded>
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
                <b-upload  expanded>
                  <a class="button is-info is-fullwidth">
                    <b-icon icon="upload"></b-icon>
                    <span>{{ "Click to upload" }}</span>
                  </a>
                </b-upload>
              </b-field>

              <div class="field">
                <label class="label">URL</label>
                <div class="control">
                  <input class="input is-info" 
                  type="text" 
                  placeholder="URL"
                   />
                </div>
              </div>

              <div class="field">
                <label class="label">Posición</label>
                <div class="control">
                  <input class="input is-info"
                   type="text"
                    placeholder="Posición"
                    v-model="jobModel.position" />
                </div>
              </div>

              <div class="field">
                <label class="label">Localización</label>
                <div class="control">
                  <input class="input is-info" 
                  type="text" 
                  placeholder="Localización" 
                  v-model="jobModel.location"/>
                </div>
              </div>

              <div class="field">
                <label class="label">Descripción</label>
                <div class="control">
                  <textarea class="textarea is-info" 
                  placeholder="Textarea"
                  v-model="jobModel.description"></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-info" @click.prevent="createJob()">Enviar</button>
                </div>
                <div class="control">
                  <button class="button is-info is-light" expanded>Cancelar</button>
                </div>
              </div>
       </form> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Job } from "@/core/model/jobs.model";
import { JobService } from "@/core/services/job.service";
import {Category} from "@/core/model/jobs.model";
@Component
export default class FormJob extends Vue {
  
  jobModel = new Job();
  
  jobService = new JobService();

  async createJob(){
    let result = await this.jobService.post(this.jobModel);
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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